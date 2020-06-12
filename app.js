const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const swaggerDoc = require('./config/swagger-doc');
const app = express();
const v1 = require('./app/routes/v1');
const {mongodbConnection} = require('./config/db');
const config = require('./config/index')
const paginate = require('express-paginate');

swaggerDoc(app);

app.use(paginate.middleware(config.pagination.limit, config.pagination.maxLimit));
app.use(logger('dev'));
app.use(express.json());
app.use('/api/v1(.0)?', v1); // alias for vx.x and vx

module.exports = app;



// =======================
// database ==============
// =======================

/////// connect to mongo db
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

mongoose.connect(mongodbConnection).catch(function (err) {
    console.log("failed !", err);
});


// =======================
// body parsing ==========
// =======================

/////// body parsing limit to 50mb
app.use((req, res, next) => {
    bodyParser.json({
        limit: '50mb',
        verify: (req, res, buf, encoding) => {
            req.rawBody = buf.toString();
        }
    })(req, res, err => {
        if (err) {
            res.status(400).send('Bad body Request');
            return;
        }
        next();
    });
});

// enable for forms
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));

// =======================
// logger ================
// =======================

/////// use morgan to log requests to the console
logger.format('mine', '[:date[clf]] - :remote-addr - :req[location] - :req[content-type]- :user-agent  - :method - :url - reponse status :status - :res[content-length] - :response-time ms');
app.use(logger('mine'));



// =======================
// security ==============
// =======================

/////// limit the api requests to 100 per 15 min
var limiter = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
});

app.use(limiter);

/////// add CORS to the API
app.use(cors());

/////// improve header security
app.use(helmet());

// =======================
// routes ================
// =======================

app.use('/api/v1(.0)?', v1);


// =======================
// error handling ========
// =======================

app.use((req, res, next) => {
    const error = new Error('Method Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

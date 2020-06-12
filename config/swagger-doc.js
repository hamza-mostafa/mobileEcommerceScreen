const swaggerUI = require('swagger-ui-express');
const sawggerJsDoc = require('swagger-jsdoc');
const {mongodb} = require('../config/db')
const config = require('../config/index')

const options = {
    openapi: "3.0.0",
    swaggerDefinition: {
        components: {},
        host:`${config.env.hostname}:${config.env.port}`,
        schemes: ['http', 'https'],
        basePath:`/api/${config.env.currentApiVersion}`,
        info: {
                title: "Swenson He",
                    version: '1.0.0',
                    description: 'a small ecommerce test done in express'
            },
    },
    servers: {
        url: `http://${config.env.hostname}:${config.env.port}/api/${config.env.currentApiVersion}`
    },
    apis: [
        './app/routes/v1/*.js',
        './app/models/*.js'
    ]
}

const specs = sawggerJsDoc(options);

module.exports = (app) => {
    app.use(`/${config.swagger.path}`, swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
}

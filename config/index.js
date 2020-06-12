const main = {
    env: {
        hostname : "localhost",
        port: 3000,
        currentApiVersion: "v1"
    },
    pagination: {
        limit: 10,
        maxLimit: 50
    },
    swagger: {
        path: 'api-docs'
    }
}

module.exports = main;
module.exports.env = main.env;


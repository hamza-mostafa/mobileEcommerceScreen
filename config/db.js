const db = {
    mongodb :{
      dbName: "tester123234345",
      hostname: "localhost",
      port: 27017,
      username: "username",
      password: "password",
    }
}

db.mongodb.connectionString = `mongodb://${db.mongodb.hostname}:${db.mongodb.port}/${db.mongodb.dbName}`

module.exports.mongodbConnection = db.mongodb.connectionString;
module.exports.mongodb = db.mongodb;

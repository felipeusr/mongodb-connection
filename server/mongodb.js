const mongodb = require("mongodb").MongoClient;

mongodb.connect("mongodb://localhost:27017/mydb", (error, db) => {
    if (error) throw error;
    exports.database = db.db("BANCO");
});
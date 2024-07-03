const mongoose = require("mongoose");
require('dotenv').config();

class Mongo {
    constructor() {
        this._connect();
    }

    _connect() {
        const env = process.env.NODE_ENV;
        console.log("env:", env);
        
        let URI = '';
        if(env === "dev"){
            URI = process.env.MONGO_URI_DEV;
        } else if(env === "qc"){
            URI = process.env.MONGO_URI_QC;
        } else if(env === "prod"){
            URI = process.env.MONGO_URI_PROD;
        }

        console.log("URI:", URI);
        mongoose.connect(URI)
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

    }
}

module.exports = new Mongo();

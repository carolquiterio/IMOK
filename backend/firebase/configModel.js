const Firebase = require('firebase');

const firebaseConfig = class {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiKey = "AIzaSyDVcnhKnFcYPnVNLRSJmmWH4V7LIQJIuuI";
        this.authDomain = "imok-d2e58.firebaseapp.com";
        this.databaseURL = "https://imok-d2e58.firebaseio.com";
        this.projectId = "imok-d2e58";
        this.storageBucket = "imok-d2e58.appspot.com";
        this.messagingSenderId = "734344897285";
        this.appId = "1:734344897285:web:134e3917a73f8f826e8d6c";
    }
}

const startFirebase = (apiKey) => {
    let config = new firebaseConfig(apiKey);
    Firebase.initializeApp(config)
}

module.exports = startFirebase;
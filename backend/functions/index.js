const functions = require('firebase-functions');
var cors = require('cors')({ origin: true });

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.storeData = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        console.log(request);

        var email = request.body.data.Email;
        var password = request.body.data.Password;

        db.collection("Task").doc("Id").set({
            Email: email,
            Password: password
        });
    });
});
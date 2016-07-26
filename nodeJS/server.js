var firebase = require("firebase");
var accountFilePath = __dirname + '/SmartHome-a724a1bd5ec9.json';
var buttons = []

firebase.initializeApp({
    serviceAccount: accountFilePath,
    databaseURL: "https://smarthome-46be4.firebaseio.com/"
});

var firebaseRef = firebase.database().ref('buttons');
firebaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        buttons.push(item);
    });
    console.log('Items', buttons);
});

firebaseRef.on('child_changed', function (data) {
    var status = data.val().IsOn ? 'On' : 'Off';
    console.log(data.key + ' is ' + status);
});
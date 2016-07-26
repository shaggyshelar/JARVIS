var firebase = require("firebase");
var accountFilePath = __dirname + '/SmartHome-a724a1bd5ec9.json';
console.log(accountFilePath);

firebase.initializeApp({
    serviceAccount: accountFilePath,
    databaseURL: "https://smarthome-46be4.firebaseio.com/"
});

console.log('Authenticated');

var firebaseRef = firebase.database().ref('buttons');
firebaseRef.on('value', function (snapshot) {
    var items = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        items.push(item);
    });
    console.log('Items',items);
});

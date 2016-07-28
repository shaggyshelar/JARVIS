var firebase = require("firebase");
var NodeWebcam = require("node-webcam");

var accountFilePath = __dirname + '/SmartHome-a724a1bd5ec9.json';
var buttons = []

firebase.initializeApp({
    serviceAccount: accountFilePath,
    databaseURL: "https://smarthome-46be4.firebaseio.com/"
});

var firebaseRef = firebase.database().ref('devices/toggleDevices');
firebaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        buttons.push(item);
    });
    //console.log('Items', buttons);
});

var opts = {
    width: 1280,
    height: 720,
    delay: 0,
    quality: 100,
    output: "jpeg",
    verbose: false,
}

var Webcam = NodeWebcam.create(opts);

firebaseRef.on('child_changed', function (data) {
    var item = data.val();
    var status = item.IsOn ? 'On' : 'Off';
    console.log(item.Name + ' is ' + status);
    if (item.Name == 'Light 3') {
        NodeWebcam.capture("captured", opts, function () {
            console.log("Image created!");
            // var storage = firebase.storage();
            // var storageRef = storage.ref();
            // var spaceRef = storageRef.child('Captures/notification.jpg');

            // var file = './captured.jpeg';
            // var uploadTask = spaceRef.put(file);
            // uploadTask.on('state_changed', function (snapshot) {
            //     // Observe state change events such as progress, pause, and resume
            //     // See below for more detail
            //     console.log('State Changed');
            // }, function (error) {
            //     console.log('Error:', error);
            //     // Handle unsuccessful uploads
            // }, function () {
            //     // Handle successful uploads on complete
            //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            //     var downloadURL = uploadTask.snapshot.downloadURL;
            //     console.log('Download URL');
            // });
        });
    }
});
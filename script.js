  // Set the configuration for your app
  // TODO: Replace with your project's config object
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyCw9KvJkWqIyOZiilmoG3VRMUX1kKi9iEs",
    authDomain: "fb-test-ed5c6.firebaseapp.com",
    databaseURL: "https://fb-test-ed5c6.firebaseio.com",
    projectId: "fb-test-ed5c6",
    storageBucket: "fb-test-ed5c6.appspot.com",
    messagingSenderId: "182391110006",
    appId: "1:182391110006:web:d0d286eb54b02c6ced2257",
    measurementId: "G-EPYLGQZ341"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
  firebase.database().ref('logs/').set(["123.456.789.012"]);
  var logs = firebase.database().ref('logs/');
//   console.log(logs);
  firebase.database().ref('/').once('value', function(snap){
    console.log(snap);
  });
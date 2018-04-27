//Firebase
var config = {
    apiKey: "AIzaSyB4Tn11CFaxOfgCU-vFFnUS7kh565SXpMM",
    authDomain: "homework-week-7.firebaseapp.com",
    databaseURL: "https://homework-week-7.firebaseio.com",
    projectId: "homework-week-7",
    storageBucket: "homework-week-7.appspot.com",
    messagingSenderId: "623924369382"
  };
  firebase.initializeApp(config);

  //Variable
  var database = firebase.database();
  var trainName = '';
  var trainDestination = '';
  var trainTime = '';
  var trainFrequency = '';

  $("#addTrain").on("click", function (event) {

    event.preventDefault();

    trainName = $("#name-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainTime = $("#time-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();

    database.ref().push({
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    });

});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {

    var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);


   
    $("#trainSchedule").append("<tr>" +
        "<td>" + trainName + "</td>" +
        "<td>" + trainDestination + "</td>" +
        "<td>" + trainFrequency + "</td>" +
        "<td> </td>" +
        "<td> </td>" +
        "</tr>");

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
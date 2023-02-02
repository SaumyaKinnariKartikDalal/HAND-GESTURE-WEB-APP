

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id= 'selfie' src='" +data_uri+"'>";
    })
}

console.log("ml5.version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lGJxRqgoY/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}

function speak(){
    var synth = window.speechSynthesis;
    speak1 = "The First Prediction is " + prediction1;
    speak2 = "The Second Prediction is " + prediction2;
    var utter_this = new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utter_this);
}

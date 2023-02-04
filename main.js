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

function check() {
    img = document.getElementById("selfie");
    classifier.classify(img, got_result);
}

function got_result(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("resultE1").innerHTML = result[0].label;
        document.getElementById("resultE2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        if (prediction1 == "Nice") {
            document.getElementById("updateEmoji1").innerHTML = "&#128076;";
        }
        if (prediction2 == "Nice") {
            document.getElementById("updateEmoji2").innerHTML = "&#128076;";
        }
        if (prediction1 == "Thumb Up") {
            document.getElementById("updateEmoji1").innerHTML = "&#128077;";
        }
        if (prediction2 == "Thumb Up") {
            document.getElementById("updateEmoji2").innerHTML = "&#128077;";
        }
        if (prediction1 == "Thumbs Down") {
            document.getElementById("updateEmoji1").innerHTML = "&#128078;";
        }
        if (prediction2 == "Thumbs Down") {
            document.getElementById("updateEmoji2").innerHTML = "&#128078;";
        }
        if (prediction1 == "Fist") {
            document.getElementById("updateEmoji1").innerHTML = "&#9994;";
        }
        if (prediction2 == "Fist") {
            document.getElementById("updateEmoji2").innerHTML = "&#9994;";
        }
        if (prediction1 == "Hold") {
            document.getElementById("updateEmoji1").innerHTML = "&#9995;";
        }
        if (prediction2 == "Hold") {
            document.getElementById("updateEmoji2").innerHTML = "&#9995;";
        }
        if (prediction1 == "Victory") {
            document.getElementById("updateEmoji1").innerHTML = "&#9996;";
        }
        if (prediction2 == "Victory") {
            document.getElementById("updateEmoji2").innerHTML = "&#9996;";
        }
        speak();
    }
}

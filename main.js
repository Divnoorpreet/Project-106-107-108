var prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    });
}

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/e9T0XW4Ha/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function speak(){
    if(prediction=="best"){
        var synth=window.speechSynthesis;
        speak_data1="The prediction is best. It means the most outstanding and excellent";
        var utter_this=new SpeechSynthesisUtterance(speak_data1);
        synth.speak(utter_this);
    }
    if(prediction=="victory"){
        var synth2=window.speechSynthesis;
        speak_data2="The prediction is  victory. It means an act of defeating an enemy";
        var utter_this2=new SpeechSynthesisUtterance(speak_data2);
        synth2.speak(utter_this2);
    }
     if(prediction=="amazing"){
         var synth3=window.speechSynthesis;
         speak_data3="The prediction is amazing. It  means astonishing";
         var utter_this3=new SpeechSynthesisUtterance(speak_data3);
         synth3.speak(utter_this3);
    }
}

function check(){
    var img=document.getElementById("captured_img");
    classifier.classify(img,got_result);
}

function got_result(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        prediction=results[0].label;
        if(prediction=="best"){
            document.getElementById("update_gesture").innerHTML= "&#128077;";
        }
        if(prediction=="victory"){
            document.getElementById("update_gesture").innerHTML= "&#9996;";
        }
        if(prediction=="amazing"){
            document.getElementById("update_gesture").innerHTML= "&#128076;";
        }
         speak();
        }
       
}
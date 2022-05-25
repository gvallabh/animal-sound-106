function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ocYE4gNSb/',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
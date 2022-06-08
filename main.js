function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ocYE4gNSb/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
     else{
         console.log(results);
         random_number_r=Math.floor(Math.random()* 255)+1;
         random_number_g=Math.floor(Math.random()* 255)+1;
         random_number_b=Math.floor(Math.random()* 255)+1;


         document.getElementById("result_label").innerHTML='i can hear - '+ results[0].label;
         document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
         document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


         img=document.getElementById('dog');
         img1=document.getElementById('cat');
         img2=dcument.getElementById('cow');
         img3=document.getElementById('lion');


         if(results[0].label == "barking"){
             img.src='dog_barking.jpg';
         }else if(results[0].label =="meowing"){
            img1.src='cat_meowing.jpg';
         }else if(results[0].label =="mooing"){
            img2.src='cow_mooing.jpg';
         }else{
            img3.src='lion_roar.jpg';
         
         }

     }
}
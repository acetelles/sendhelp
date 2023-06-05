function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dzLUrD74E/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
  }
  
  var vaca = 0;
  var perro = 0;
  var leon = 0;
  var gato = 0;

  function gotResults() {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'Escucho - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    }
  }


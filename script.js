var btnClose = document.getElementById('btn-close1').style.display='none';
var btnClose = document.getElementById('btn-close2').style.display='none';
document.addEventListener("DOMContentLoaded", function() {
  var carousel = document.querySelector("#carouselExampleCaptions");
  carousel.addEventListener("slide.bs.carousel", function() {
    var activeCaption = document.querySelector(".carousel-item.active .carousel-caption");
    activeCaption.classList.remove("fadeInOut");
    void activeCaption.offsetWidth; // Trigger reflow to remove the previous animation class
    activeCaption.classList.add("fadeInOut");
  });
});

document.addEventListener("navbar-toggler",function(){
  var btn = addEventListener('navbar-toggler');
  if($btn == 'true'){
    
  }
});
function hitungEnergy() {
  var mass = parseFloat(document.getElementById("massInput").value);
  var velocity = parseFloat(document.getElementById("velocityInput").value);
  if (mass === "" || velocity === "") {
    alert("Mohon isi massa dan kecepatan benda!");
    return;
  }
  
  var energyFormula = "Energi Kinetik (Ek) = 1/2 * m * v^2";
  var calculationSteps = [
    "Diketahui : ",
    "Massa (m) = " + mass + " kg",
    "Kecepatan (v) = " + velocity + " m/s"
  ];
  
  var energy = 0.5 * mass * Math.pow(velocity, 2);
  calculationSteps.push("<br>"+ "Hitung energi kinetik :");
  calculationSteps.push("     Ek = 1/2 * " + mass + " * " + velocity + "^2");
  calculationSteps.push("     Ek = " +"<b>" + energy + "</b>" + " Joule");
  
  
  document.getElementById("formula").innerText = energyFormula;
  document.getElementById("calculationSteps").innerHTML = calculationSteps.join("<br>");
  document.getElementById("result").style.display = "block";
  var btnClose = document.getElementById('btn-close1').style.display='block';
}

function hideResult() {
  document.getElementById("result").style.display = "none";
  
  // Menampilkan kembali input setelah menyembunyikan hasil
  document.getElementById("soal").style.display = "block";
  
  // Mereset nilai input
  document.getElementById("massInput").value = "";
  document.getElementById("velocityInput").value = "";
  var btnClose = document.getElementById('btn-close1').style.display='none';
}

function hitungEnergiPotensial() {
  var massa = parseFloat(document.getElementById("massaInput").value);
  var ketinggian = parseFloat(document.getElementById("ketinggianInput").value);
  
  if (massa === "" || ketinggian === "") {
    alert("Mohon isi massa dan ketinggian benda!");
    return;
  }
  
  var formulaPotensial = "Energi Potensial (Ep) = m * g * h";
  var calculationStepsPotensial = [
    "Diketahui :",
    "Massa (m) = " + massa + " kg",
    "Ketinggian (h) = " + ketinggian + " meter",
      ];
      
      var gravitasi = 10; // percepatan gravitasi bumi (m/s^2)
      
      var energyPotensial = massa * gravitasi * ketinggian;
      
      calculationStepsPotensial.push("<br>" + "Hitung energi potensial :");
      calculationStepsPotensial.push("     Ep = " + massa + " * " + gravitasi + " * " + ketinggian);
      calculationStepsPotensial.push("     Ep = " + energyPotensial + " Joule");
      
      document.getElementById("formulaPotensial").innerText = formulaPotensial;
      document.getElementById("calculationStepsPotensial").innerHTML = calculationStepsPotensial.join( "<br>");
      document.getElementById("resultPotensial").style.display = "block";
      var btnClose = document.getElementById('btn-close2').style.display='block';
    }
    
    function hideResultPotensial() {
      document.getElementById("resultPotensial").style.display = "none";
      document.getElementById("massaInput").value = "";
      document.getElementById("ketinggianInput").value = "";
      var btnClose = document.getElementById('btn-close2').style.display='none';
    }
    
function mode (){

if  (document.querySelector(".btn").style.color == "black" ? dark() : light() );




function light(){

    document.querySelector(".btn").style.color = "black";
    document.querySelector(".btn").style.transition = "0.5s";
    document.body.style.backgroundColor = "white";
    document.body.style.transition = "0.5s";
   var parah = document.querySelectorAll(".parah");
   for(i = 0; i < parah.length; i++){
    parah[i].style.color = "black"
    parah[i].style.transition = "0.5s";
   }
    document.querySelector(".heading").style.color= "black";
    document.querySelector(".heading").style.transition = "0.5s";

}

function dark(){

    document.querySelector(".btn").style.color = "white";
    document.querySelector(".btn").style.transition = "0.5s";
    document.body.style.backgroundColor = "black";
    document.body.style.transition = "0.5s";
   var parah = document.querySelectorAll(".parah");
   for(i = 0; i < parah.length; i++){
    parah[i].style.color = "white"
    parah[i].style.transition = "0.5s";

   }
    document.querySelector(".heading").style.color= "white";
    document.querySelector(".heading").style.transition = "0.5s";

}
};


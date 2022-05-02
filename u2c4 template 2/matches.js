// write js code here corresponding to matches.html


var tbody=document.querySelector("tbody")

var arr=JSON.parse(localStorage.getItem("schedule"));

var favourite= JSON.parse(localStorage.getItem("favourites")) || [];

display(arr);

function display(data){ 

    data.forEach(function (elem){

     var row=document.createElement("tr");

     var c1=document.createElement("td");
     c1.innerText=elem.match_no;

     var c2=document.createElement("td");
     c2.innerText=elem.team_A;

     var c3=document.createElement("td");
     c3.innerText=elem.team_B;

     var c4=document.createElement("td");
     c4.innerText=elem.date;

     var c5=document.createElement("td");
     c5.innerText=elem.venue;

     var c6=document.createElement("td");
     c6.innerText="favourites"
     c6.style.color="red";
     c6.style.cursor="pointer"

     row.append(c1,c2,c3,c4,c5,c6);

     tbody.append(row);


     c6.addEventListener("click",function(){
        favourites(elem)
     })


    })
}

function favourites(elem){

    favourite.push(elem);
    console.log(favourite)
    localStorage.setItem("favourites",JSON.stringify(favourite))
    window.location.href="./favourites.html"


}
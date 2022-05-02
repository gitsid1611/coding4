// write js code here corresponding to index.html
// You should add submit event on the form

var form=document.querySelector("#masaiForm");

form.addEventListener("submit", schedules);


var arr=JSON.parse(localStorage.getItem("schedule")) || [];

function schedules(){
 
    event.preventDefault();

    var obj={

        match_no: document.querySelector("#matchNum").value,
        team_A: document.querySelector("#teamA").value,
        team_B : document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue:document.querySelector("#venue").value

    };

    arr.push(obj);
    console.log(arr);
    localStorage.setItem("schedule",JSON.stringify(arr))
    

    window.location.href="./matches.html"



}
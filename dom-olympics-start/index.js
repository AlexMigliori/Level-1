
//header
var title = document.getElementById("header");
title.innerHTML += "<h1>Welcome to the Olympics</h1>";
document.getElementById("header").style.textAlign = "center";

//span
var newSpan = document.createElement("span");
newSpan.innerHTML += " <span>Made it</span>";
newSpan.style.color = "black";

//color name
var nameColor = document.createElement("h2");
nameColor.innerHTML += "<span>Alex Migliori</span>";
document.getElementById("header").appendChild(nameColor).appendChild(newSpan);
nameColor.style.color = "peachpuff";

//clear button
document.getElementById('clear-button').addEventListener("click", resetButton);

function resetButton(){
    var clearMessage = document.getElementsByClassName("messages");
    clearMessage[0].innerHTML = "";
}


//replace messages
let newMessage = document.getElementsByClassName("message");
newMessage[0].textContent = "Do you want a quesadilla?";
newMessage[1].textContent = "Yes! I love those.";
newMessage[2].textContent = "Cool, that will be $14.99";
newMessage[3].textContent = "What?! So much money! Dang inflation";

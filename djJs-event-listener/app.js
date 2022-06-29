document.getElementById("box").addEventListener("mousedown", mouseDown);
document.getElementById("box").addEventListener("mouseup", mouseUp);
document.getElementById("box").addEventListener("mouseover", mouseOver);
document.getElementById("box").addEventListener("dblclick", doubleClick);
document.body.addEventListener("wheel", scroller);


function mouseDown (){
    document.getElementById("box").style.backgroundColor = "red";
}

function mouseUp (){
    document.getElementById("box").style.backgroundColor = "yellow";
}


function mouseOver (){
    document.getElementById("box").style.backgroundColor = "blue";
}

function doubleClick (){
    document.getElementById("box").style.backgroundColor = "green";
}





function scroller (){
    var block = document.getElementById("box");
    block.style.backgroundColor = "orange";
    
}
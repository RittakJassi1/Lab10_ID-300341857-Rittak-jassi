function changeColor(){
    
}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
    if(document.getElementById("red").checked){
        document.getElementById("text").style.color = "red";
    } 
    else if(document.getElementById("blue").checked){
        document.getElementById("text").style.color = "blue";
    }
    else if(document.getElementById("green").checked){
        document.getElementById("text").style.color = "green";
    }
}   

function changeBgColor(){
}

function changeBg(){
    var select = document.getElementById('colorsel');
    var text = select.options[select.selectedIndex].text;
    document.getElementById("td_text").style.backgroundColor = text;

    }

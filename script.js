var ulis=document.getElementById("uli")
var add=document.getElementById("addbtn")
var inp=document.getElementById("inp-box")
function addli(){
    var li=document.createElement("li")
    li.innerHTML=inp.value + "<button onclick='delet(event)'>close</button>"
    ulis.appendChild(li)
}
var del=document.querySelectorAll("btn");
function delet(event){
    event.target.parentElement.remove();
}
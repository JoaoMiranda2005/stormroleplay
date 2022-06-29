var i=0
var txt = "Bem Vindo ao Storm Roleplay";
var speed = 75;
function type(){
    document.getElementById("type").innerHTML 
        +=txt.charAt(i);
    i++;
    setTimeout(type,speed);
}  
type();
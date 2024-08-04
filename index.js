const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1El=document.getElementById("pwd1-el");
let pwd2El=document.getElementById("pwd2-el");
function generate(){
    let first="";
   for(let i=0;i<15;i++){
     let a=Math.floor(Math.random()*characters.length)
     first+=characters[a];
   }
   let second="";
    for(let i=0;i<15;i++){
     let a=Math.floor(Math.random()*characters.length)
   second+=characters[a];
   }
   pwd1El.textContent=first
   pwd2El.textContent=second
}


let color = ["red","blue","green","yellow","aqua","orange","olive","gray"];

let body = document.querySelector("body");
let button1 = document.querySelector("#btn");

button1.addEventListener("click",function(){	
	body.style.backgroundColor = color[Math.round(Math.random()*color.length)];	
})

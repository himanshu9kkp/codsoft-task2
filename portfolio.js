let image=document.querySelector(".card-img-top");
let images=['logo1.png','logo2.png','logo4.jpg'];
setInterval(function(){
    let rendom=Math.floor(Math.random()*3);
    image.src=images[rendom];
},1200);
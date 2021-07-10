canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");
 rover_width = 100; rover_height = 90; 
 background_image = "mars.jpg"; 
 rover_image = "rover.png"; 
 rover_x = 10; 
 rover_y = 10;

function add () 
{
    alert("hello") ; 
    background_imgTag = new Image() ; 
    background_imgTag.onload = uploadBackground ; 
     background_imgTag.src =  background_image ; 

    
    

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height) ; 

}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height) ; 

}
var canvas = document.getElementById("canvas"); //links the script to the canvas in html
var ctx = canvas.getContext("2d"); //sets renderer context

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas(); //will resize to viewport on eventlistener

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function mainLoop(timestamp){

    //this loops runs once per frame
    //calculate/render stuff here
    //you can link other classes to this main file, which can call each objects render function, update function etc

    requestAnimationFrame(mainLoop);
}

mainLoop(); //initial run of loop
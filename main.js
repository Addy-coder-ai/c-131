img="";
function preload(){
img=loadImage("dog_cat.jpg");
}


function setup() {
    canvas = createCanvas(640,320);
    canvas.center();
}


function draw() {
    image(img,0,0,640,320);
    fill("#0000FF");
    text("Dog",60,92);
    noFill();
    stroke("#FF0000");
    rect(30,60,300,250);
}


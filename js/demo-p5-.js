function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120, 10);
}
function mouseMoved(){
    stroke(1);
    const red = Math.abs(Math.sin(frameCount * .01)) * 255;
    const blue = Math.abs(Math.sin(frameCount * .01 + 4)) * 255;
    const green = Math.abs(Math.sin(frameCount * .01 + 2)) * 255;
    fill(red, green, blue);
    //const size = random(150)
    const size = Math.abs(Math.sin(frameCount * .01)) * 100;
    ellipse(mouseX, mouseY, size, size);
}
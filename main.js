song1 = 'Stardust.mp3';
song2 = 'Fugent.mp3';

function preload() {
    song1 = loadSound("Stardust.mp3");
    song2 = loadSound("Fugent.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}
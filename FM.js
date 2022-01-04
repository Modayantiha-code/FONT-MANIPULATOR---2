function setup() {
    canvas = createCanvas(465, 350);
    canvas.position(650, 200);
    webcamvideo = createCapture(VIDEO);
    webcamvideo.size(600, 350);
    webcamvideo.position(100, 200);
    posenetmodel = ml5.poseNet(webcamvideo, modelloaded);
    posenetmodel.on("pose", getresults);
}

function getresults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
    }
}

function modelloaded() {
    console.log("model has loaded");
}
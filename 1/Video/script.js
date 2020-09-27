const videoGrid = document.getElementById("video-grid");

const videoElem = document.createElement("video");
videoElem.muted = true;


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    addVidoStream(videoElem, stream);
})

const addVidoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}

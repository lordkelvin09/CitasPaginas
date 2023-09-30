const cameraContainer = document.getElementById('camera-container');
// const userVideo = document.getElementsByClassName('video-player');

document.getElementById('formul__ario').addEventListener('click', () => {
    const camera = cameraContainer.classList.contains('small');
    // const video = userVideo.classList.contains('displey');

    if(camera) {
        cameraContainer.classList.add('small');
        // userVideo.classList.add('displey');
    }
   cameraContainer.classList.toggle('small');
    
})
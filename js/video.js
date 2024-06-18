// Function to mute the video
function muteGoogleDriveVideo() {
    const iframe = document.getElementById('videoIframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
}

// Adding event listener to mute the video once iframe is loaded
window.addEventListener('message', (event) => {
    if (event.origin !== 'https://drive.google.com') return;
    const data = JSON.parse(event.data);
    if (data.event === 'onReady') {
        muteGoogleDriveVideo();
    }
});

// Embed YouTube API for controlling iframe video
const iframe = document.getElementById('videoIframe');
iframe.src += '&enablejsapi=1&version=3&playerapiid=iframe'; 

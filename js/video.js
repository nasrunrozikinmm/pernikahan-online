document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const startTime = 0; // Start time in seconds
  const endTime = 1500; // End time in seconds

  video.currentTime = startTime;

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= endTime) {
      video.pause();
      video.currentTime = startTime;
    }
  });

  video.play();
});

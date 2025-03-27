document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const modalFrame = document.getElementById("videoFrame");
    const closeBtn = document.querySelector(".close-btn");
  
    // Open modal with correct YouTube video
    document.querySelectorAll(".youtube-video").forEach(card => {
      card.addEventListener("click", function () {
        const videoSrc = this.getAttribute("data-video") + "?autoplay=1";
        modalFrame.src = videoSrc;
        modal.style.display = "flex";
      });
    });
  
    // Open external site link
    document.querySelectorAll(".site-video a").forEach(card => {
      card.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent unwanted modal opening
      });
    });
  
    // Close modal when clicking the close button
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      modalFrame.src = "";
    });
  
    // Close modal when clicking outside the video
    modal.addEventListener("click", function (e) {
      if (!modalFrame.contains(e.target)) {
        modal.style.display = "none";
        modalFrame.src = "";
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const modalFrame = document.getElementById("videoFrame");
    const closeBtn = document.querySelector(".close-btn");

    // Open modal with correct YouTube embed link
    document.querySelectorAll(".youtube-video").forEach(card => {
      card.addEventListener("click", function () {
        const videoId = this.getAttribute("data-video"); // Get video ID
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modalFrame.src = embedUrl;
        modal.style.display = "flex";
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

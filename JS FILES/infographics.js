document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  // Open modal and maximize image
  document.querySelectorAll(".infographic-image").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      modalImg.style.transform = "scale(1)"; // Ensuring max zoom
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (!modalImg.contains(e.target)) {
      modal.style.display = "none";
    }
  });
});

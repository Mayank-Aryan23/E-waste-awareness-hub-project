document.addEventListener("DOMContentLoaded", function () {
    const problemCards = document.querySelectorAll(".problem-card");
  
    problemCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Collapse any open descriptions
        problemCards.forEach((otherCard) => {
          if (otherCard !== this) {
            otherCard.classList.remove("active");
            otherCard.querySelector(".problem-description").style.maxHeight = "0";
            otherCard.querySelector(".problem-description").style.padding = "0 18px";
          }
        });
  
        // Toggle the clicked problem
        this.classList.toggle("active");
        const description = this.querySelector(".problem-description");
  
        if (this.classList.contains("active")) {
          description.style.maxHeight = description.scrollHeight + "px";
          description.style.padding = "18px";
        } else {
          description.style.maxHeight = "0";
          description.style.padding = "0 18px";
        }
      });
    });
  });
  
// Function to toggle description visibility
function toggleDescription(card) {
    var description = card.querySelector('.idea-description');
    
    // Close any open descriptions before opening a new one
    document.querySelectorAll('.idea-description').forEach(function(desc) {
      if (desc !== description) {
        desc.style.display = 'none';
      }
    });
  
    // Toggle the clicked card's description
    description.style.display = (description.style.display === 'block') ? 'none' : 'block';
  }
  
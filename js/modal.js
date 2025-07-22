// Open Modals
document.querySelectorAll('.open-modal').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const modalID = this.getAttribute('href').substring(1);
    const modal = document.getElementById(modalID);
    if (modal) {
      modal.showModal();
      modal.classList.remove('closing'); // Remove fade-out class if present
    }
  });
});

// Close buttons
document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const modal = this.closest('dialog');
    if (modal) closeModal(modal);
  });
});

// Close when clicking outside the article
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', function(event) {
    const article = dialog.querySelector('article');
    if (!article.contains(event.target)) {
      closeModal(dialog);
    }
  });
});

// Function to close modal
function closeModal(modal) {
modal.close();
}
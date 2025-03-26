document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top and bottom buttons
  const scrollTopBtn = document.querySelector('.scroll-to-top');
  const scrollBottomBtn = document.querySelector('.scroll-to-bottom');

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (scrollBottomBtn) {
    scrollBottomBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  // Image enlargement on click
  const postImages = document.querySelectorAll('.post-body img, .page-body img');

  postImages.forEach(function(img) {
    img.addEventListener('click', function() {
      const modal = document.createElement('div');
      modal.classList.add('image-modal');

      const modalImg = document.createElement('img');
      modalImg.src = this.src;
      modal.appendChild(modalImg);

      document.body.appendChild(modal);

      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';

      // Close modal on click
      modal.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      });
    });
  });

  // Add modal styles dynamically if not already in CSS
  if (!document.querySelector('#image-modal-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'image-modal-styles';
    styleSheet.textContent = `
      .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: zoom-out;
      }

      .image-modal img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      }
    `;
    document.head.appendChild(styleSheet);
  }

  // Mobile menu toggle for responsive design
  const sidebarEl = document.querySelector('.sidebar');

  if (window.innerWidth <= 767 && sidebarEl) {
    const headerEl = document.querySelector('.site-header');

    if (headerEl) {
      headerEl.addEventListener('click', function() {
        sidebarEl.classList.toggle('expanded');
      });
    }
  }
});

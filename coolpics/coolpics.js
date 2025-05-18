document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menuButton');
    const nav = document.querySelector('nav');

    function handleResize() {
        if (window.innerWidth > 1000) {
            nav.classList.remove('hide');
        } else {
            nav.classList.add('hide');
        }
    }

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('hide');
    });

    window.addEventListener('resize', handleResize);
    handleResize();

    // Modal functionality
    const galleryImages = document.querySelectorAll('.gallery img');
    const dialog = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = dialog.querySelector('.close-viewer');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            dialog.showModal();
        });
    });

    closeButton.addEventListener('click', function() {
        dialog.close();
        modalImage.src = ''; // Clear the image source
    });

    // Close modal when clicking outside the image
    dialog.addEventListener('click', function(event) {
        if (event.target === dialog) {
            dialog.close();
            modalImage.src = ''; // Clear the image source
        }
    });

    // Close modal with the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && dialog.open) {
            dialog.close();
            modalImage.src = ''; // Clear the image source
        }
    });
});
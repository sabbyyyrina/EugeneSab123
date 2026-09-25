document.addEventListener('DOMContentLoaded', function () {
  const contactBtn = document.getElementById('contactBtn');
  const contactMenu = document.getElementById('contactMenu');

  if (contactBtn && contactMenu) {
    // Toggle contact menu visibility on button click
    contactBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      contactMenu.classList.toggle('show');
    });

    // Hide dropdown menu when clicking anywhere outside
    document.addEventListener('click', function () {
      contactMenu.classList.remove('show');
    });
  }
});
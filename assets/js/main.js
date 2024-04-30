  // JavaScript to toggle the dropdown menu
  document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.getElementById("myDropdown");

    dropdown.addEventListener('click', function(event) {
      dropdownContent.classList.toggle('show');
      event.stopPropagation();
    });

    window.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  });
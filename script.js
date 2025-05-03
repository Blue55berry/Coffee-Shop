// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Function to toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Add event listener to the button
toggleButton.addEventListener('click', toggleTheme);
<script>
  AOS.init();
</script>
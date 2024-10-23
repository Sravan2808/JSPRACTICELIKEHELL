// Get the progress bar element
const progressBar = document.getElementById('progressBar');

// Listen for the scroll event
window.onscroll = function() {
  // Calculate the percentage of the page scrolled
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolledPercentage = (scrollTop / scrollHeight) * 100;

  // Update the progress bar width
  progressBar.style.width = scrolledPercentage + '%';
};

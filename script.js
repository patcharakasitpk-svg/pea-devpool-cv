const portfolioToggleBtn = document.getElementById('portfolioToggleBtn');
const portfolioAnswer = document.getElementById('portfolioAnswer');
const chevronIcon = document.getElementById('chevronIcon');

portfolioToggleBtn.addEventListener('click', () => {
  const isOpen = portfolioAnswer.classList.toggle('is-open');
  chevronIcon.classList.toggle('is-open', isOpen);
});
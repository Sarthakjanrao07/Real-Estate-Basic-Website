function celebrate() {
  const confettiContainer = document.getElementById('confetti');
  confettiContainer.style.display = 'block'; // Show the confetti container

  // Number of confetti pieces
  const numberOfConfetti = 100;

  for (let i = 0; i < numberOfConfetti; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // Randomize position and color
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * 100}vh`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;

      confettiContainer.appendChild(confetti);

      // Remove the confetti after the animation
      confetti.addEventListener('animationend', () => {
          confetti.remove();
      });
  }

  // Hide the confetti container after a short delay
  setTimeout(() => {
      confettiContainer.style.display = 'none';
  }, 3000); // Adjust based on animation duration
}


document.addEventListener('DOMContentLoaded', () => {
  const monthYearElement = document.getElementById('month-year');
  const datesElement = document.getElementById('dates');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  let currentDate = new Date();
  let today = new Date();

  function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();

      monthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();

      datesElement.innerHTML = '';

      // Fill days before the first day of the month
      for (let i = 0; i < firstDay.getDay(); i++) {
          datesElement.innerHTML += '<div></div>';
      }

      // Fill days of the month
      for (let i = 1; i <= daysInMonth; i++) {
          const dayElement = document.createElement('div');
          dayElement.textContent = i;

          // Highlight today's date
          if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
              dayElement.classList.add('highlight');
          }

          datesElement.appendChild(dayElement);
      }
  }

  prevMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
  });

  nextMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});

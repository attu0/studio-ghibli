document.addEventListener('DOMContentLoaded', () => {
  // Create custom cursor element
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Update cursor and spotlight position
  document.addEventListener('mousemove', (e) => {
    // Update custom cursor position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Update spotlight position using CSS variables
    document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
  });

  // Handle cursor visibility
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  // Scale up cursor on interactive elements
  const interactiveElements = document.querySelectorAll('button, a, .movie-poster, .character-card, .close-button');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = 'rgba(255, 250, 205, 0.5)';
    });

    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'rgba(255, 250, 205, 0.3)';
    });
  });
}); 
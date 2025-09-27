// Анімація руху блока
document.getElementById('startAnim').addEventListener('click', () => {
    const box = document.querySelector('.box');
    box.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(300px)' }
    ], {
      duration: 2000,
      iterations: 1
    });
  });
  
  // Клік на зображення — відкриття у новій вкладці
  document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
      window.open(img.src, '_blank');
    });
  });
  
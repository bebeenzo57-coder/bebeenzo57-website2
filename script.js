// Filtre simple (vanilla JS)
document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card');

  function setActive(button){
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  }

  function filterBy(category){
    cards.forEach(card => {
      const cat = card.dataset.category || 'all';
      if(category === 'all' || cat === category){
        card.style.display = ''; // show (grid will place it)
      } else {
        card.style.display = 'none';
      }
    });
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      setActive(btn);
      filterBy(cat);
      // smooth scroll to top of gallery on mobile
      document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
    });
  });

  // keyboard accessibility: Enter/Space to open (example)
  cards.forEach(c => {
    c.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        c.click();
      }
    });
    // click handler: simulate navigation
    c.addEventListener('click', () => {
      const title = c.querySelector('.card-overlay h2').innerText;
      alert('Cliqué sur : ' + title + '\nIci tu peux rediriger vers la page de la destination.');
    });
  });
});

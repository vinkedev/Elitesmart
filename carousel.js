// Fonction pour initialiser les carrousels
function initializeCarousels() {
  // Détection du mobile
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Activer les carrousels
    document.querySelectorAll('.carousel-container').forEach(container => {
      container.style.display = 'block';
    });
    
    // Désactiver les grilles desktop
    document.querySelectorAll('.product-grid').forEach(grid => {
      grid.style.display = 'none';
    });
    
    // Initialiser les flèches
    setupCarouselArrows();
  } else {
    document.querySelectorAll('.carousel-container').forEach(container => {
      container.style.display = 'none';
    });
    
    document.querySelectorAll('.product-grid').forEach(grid => {
      grid.style.display = 'grid';
    });
  }
}

// Fonction pour configurer les flèches de navigation
function setupCarouselArrows() {
  document.querySelectorAll('.carousel-arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carouselType = this.getAttribute('data-carousel');
      const isPrev = this.classList.contains('prev');
      const carouselId = `mobile-${carouselType}`;
      
      const carousel = document.getElementById(carouselId);
      if (!carousel) return;
      
      const cardWidth = carousel.querySelector('.product-card').offsetWidth + 20;
      const scrollAmount = isPrev ? -cardWidth : cardWidth;
      
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Mettre à jour les indicateurs après le défilement
      setTimeout(() => updateCarouselIndicators(carouselType), 300);
    });
  });
}

// Fonction pour mettre à jour les indicateurs
function updateCarouselIndicators(carouselType) {
  const carousel = document.getElementById(`mobile-${carouselType}`);
  const indicators = document.querySelectorAll(`#${carouselType}-indicators .scroll-indicator`);
  
  if (!carousel || !indicators.length) return;
  
  const scrollPosition = carousel.scrollLeft;
  const cardWidth = carousel.querySelector('.product-card').offsetWidth + 20;
  const activeIndex = Math.round(scrollPosition / cardWidth);
  
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === activeIndex);
  });
}

// ===== GESTION DU REDIMENSIONNEMENT =====
window.addEventListener('resize', initializeCarousels);

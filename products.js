// ===== PRODUITS AVEC TES IMAGES =====
const products = {
  montres: [
    {
      id: 1,
      name: "Montre Elite 1",
      category: "MONTRE CONNECTÉE",
      description: "Écran AMOLED, suivi santé 24/7, autonomie 7 jours, résistance à l'eau",
      price: "150.000 FCFA",
      image: "/Elitesmart/Montres/montre1.jpg",
      badge: "hot",
      badgeText: "🔥 BEST SELLER"
    },
    {
      id: 2,
      name: "Montre Elite 2",
      category: "MONTRE SPORT",
      description: "GPS intégré, 50 modes sport, oxymètre, moniteur de sommeil",
      price: "180.000 FCFA",
      image: "/Elitesmart/Montres/montre2.jpg",
      badge: "hot",
      badgeText: "TOP VENTE"
    },
    {
      id: 3,
      name: "Montre Elite 3",
      category: "MONTRE CONNECTÉE",
      description: "Écran tactile, notifications, fitness tracking, design élégant",
      price: "120.000 FCFA",
      image: "/Elitesmart/Montres/Montre3.jpg",
      badge: "new",
      badgeText: "NOUVEAU"
    },
    {
      id: 4,
      name: "Montre Elite 4",
      category: "MONTRE CONNECTÉE",
      description: "Batterie longue durée, monitoring cardiaque, étanche 5ATM",
      price: "135.000 FCFA",
      image: "/Elitesmart/Montres/Montre4.jpg",
      badge: "promo",
      badgeText: "PROMO -15%"
    },
    {
      id: 5,
      name: "Montre Elite 5",
      category: "MONTRE SPORT",
      description: "Écran couleur, 30+ sports, GPS, coaching personnalisé",
      price: "160.000 FCFA",
      image: "/Elitesmart/Montres/montre5.jpg",
      badge: "hot",
      badgeText: "POPULAIRE"
    },
    {
      id: 6,
      name: "Montre Elite 6",
      category: "MONTRE CONNECTÉE",
      description: "Design premium, écran AMOLED, compatibilité iOS/Android",
      price: "175.000 FCFA",
      image: "/Elitesmart/Montres/montre6.jpg",
      badge: "new",
      badgeText: "NOUVEAU"
    },
    {
      id: 7,
      name: "Montre Elite 7",
      category: "MONTRE SPORT",
      description: "Résistance extrême, navigation, oxymètre de pouls",
      price: "195.000 FCFA",
      image: "/Elitesmart/Montres/montre7.jpg",
      badge: "hot",
      badgeText: "HAUT DE GAMME"
    },
    {
      id: 8,
      name: "Montre Elite 8",
      category: "MONTRE CONNECTÉE",
      description: "Autonomie 10 jours, écran rétractable, fonctions avancées",
      price: "140.000 FCFA",
      image: "/Elitesmart/Montres/montre8.jpg",
      badge: "promo",
      badgeText: "PROMO"
    },
    {
      id: 9,
      name: "Montre Elite 9",
      category: "MONTRE CONNECTÉE",
      description: "Écran AMOLED avancé, fonctions santé complètes",
      price: "155.000 FCFA",
      image: "/Elitesmart/Montres/montre9.jpg",
      badge: "hot",
      badgeText: "LIMITÉ"
    },
    {
      id: 10,
      name: "Montre Elite 10",
      category: "MONTRE DE LUXE",
      description: "Design premium, matériaux haut de gamme, fonctions exclusives",
      price: "220.000 FCFA",
      image: "/Elitesmart/Montres/montre10.jpg",
      badge: "new",
      badgeText: "LUXE"
    },
    {
      id: 11,
      name: "Montre Elite 11",
      category: "MONTRE SPORT",
      description: "Étanche 100m, GPS précis, batterie longue durée",
      price: "190.000 FCFA",
      image: "/Elitesmart/Montres/montre11.jpg",
      badge: "hot",
      badgeText: "SPORT"
    },
    {
      id: 12,
      name: "Montre Elite 12",
      category: "MONTRE CONNECTÉE",
      description: "Écran incurvé, design futuriste, fonctions intelligentes",
      price: "165.000 FCFA",
      image: "/Elitesmart/Montres/montre12.jpg",
      badge: "new",
      badgeText: "INNOVANT"
    },
    {
      id: 13,
      name: "Montre Elite 13",
      category: "MONTRE CLASSIQUE",
      description: "Design élégant, acier inoxydable, montre connectée discrète",
      price: "145.000 FCFA",
      image: "/Elitesmart/Montres/montre13.jpg",
      badge: "promo",
      badgeText: "ÉLÉGANT"
    },
    {
      id: 14,
      name: "Montre Elite 14",
      category: "MONTRE SPORT",
      description: "Légère et résistante, suivi activité complet",
      price: "125.000 FCFA",
      image: "/Elitesmart/Montres/montre14.jpg",
      badge: "hot",
      badgeText: "LÉGER"
    },
    {
      id: 15,
      name: "Montre Elite 15",
      category: "MONTRE CONNECTÉE",
      description: "Écran tactile couleur, notifications, paiement sans contact",
      price: "170.000 FCFA",
      image: "/Elitesmart/Montres/montre15.jpg",
      badge: "new",
      badgeText: "SMART"
    },
    {
      id: 16,
      name: "Montre Elite 16",
      category: "MONTRE SPORT",
      description: "Résistance militaire, GPS double fréquence",
      price: "210.000 FCFA",
      image: "/Elitesmart/Montres/montre16.jpg",
      badge: "hot",
      badgeText: "EXTRÊME"
    }
  ],
  accessoires: [
    {
      id: 17,
      name: "Accessoire Elite 1",
      category: "ACCESSOIRES",
      description: "Réduction de bruit active, son spatial, autonomie 8h, étui de charge",
      price: "45.000 FCFA",
      originalPrice: "56.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire1.jpg",
      badge: "promo",
      badgeText: "PROMO -20%"
    },
    {
      id: 18,
      name: "Accessoire Elite 2",
      category: "ACCESSOIRES",
      description: "Charge rapide 65W, compatible multi-appareils, design compact",
      price: "25.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire2.jpg",
      badge: "hot",
      badgeText: "TOP VENTE"
    },
    {
      id: 19,
      name: "Accessoire Elite 3",
      category: "ACCESSOIRES",
      description: "Qualité sonore HD, connexion Bluetooth 5.3, autonomie 12h",
      price: "35.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire3.jpg",
      badge: "new",
      badgeText: "NOUVEAU"
    },
    {
      id: 20,
      name: "Accessoire Elite 4",
      category: "ACCESSOIRES",
      description: "20.000 mAh, charge rapide PD, double port USB-C/USB-A",
      price: "40.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire4.jpg",
      badge: "hot",
      badgeText: "ESSENTIEL"
    },
    {
      id: 21,
      name: "Accessoire Elite 5",
      category: "ACCESSOIRES",
      description: "Support universel, fixation ventouse puissante, rotation 360°",
      price: "15.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire5.jpg",
      badge: "promo",
      badgeText: "PROMO"
    },
    {
      id: 22,
      name: "Accessoire Elite 6",
      category: "ACCESSOIRES",
      description: "Son surround 7.1, micro détachable, confort longue durée",
      price: "65.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire6.jpg",
      badge: "new",
      badgeText: "NOUVEAU"
    },
    {
      id: 23,
      name: "Accessoire Elite 7",
      category: "ACCESSOIRES",
      description: "Étanche IP68, son puissant, autonomie 10h",
      price: "30.000 FCFA",
      image: "/Elitesmart/Accessoires/Accessoire7.jpg",
      badge: "hot",
      badgeText: "RÉSISTANT"
    }
  ]
};

// Fonction pour générer le HTML d'une carte produit
function generateProductCard(product, isMobile = false) {
  const badgeClass = `badge-${product.badge}`;
  const hasDiscount = product.originalPrice ? `<del>${product.originalPrice}</del>` : '';
  
  return `
    <div class="product-card">
      <div class="badge ${badgeClass}">${product.badgeText}</div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300/0047AB/FFFFFF?text=Elite+Smart'">
      </div>
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">
          ${product.price}
          ${hasDiscount}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-view-details" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}' style="padding: ${isMobile ? '10px 15px' : '12px 20px'}; font-size: ${isMobile ? '13px' : '14px'}">
            <i class="fas fa-eye"></i> Détails
          </button>
          <a href="https://wa.me/22674958509?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20${encodeURIComponent(product.name)}" class="btn btn-whatsapp" target="_blank" style="padding: ${isMobile ? '10px 15px' : '12px 20px'}; font-size: ${isMobile ? '13px' : '14px'}">
            <i class="fab fa-whatsapp"></i> Commander
          </a>
        </div>
      </div>
    </div>
  `;
}

// Fonction pour afficher les produits
function displayProducts() {
  // Afficher les montres (première section)
  const watchProducts = products.montres.slice(0, 4);
  const desktopGrid = document.getElementById('desktop-watches');
  const mobileCarousel = document.getElementById('mobile-watches');
  const indicatorsContainer = document.getElementById('watches-indicators');
  
  if (desktopGrid) {
    desktopGrid.innerHTML = watchProducts.map(product => generateProductCard(product)).join('');
  }
  
  if (mobileCarousel) {
    mobileCarousel.innerHTML = watchProducts.map(product => generateProductCard(product, true)).join('');
  }
  
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = watchProducts.map((_, i) => 
      `<div class="scroll-indicator ${i === 0 ? 'active' : ''}"></div>`
    ).join('');
  }
  
  // Créer la section accessoires
  createAccessoriesSection();
  
  // Observer les nouvelles cartes produits
  setTimeout(() => {
    document.querySelectorAll('.product-card').forEach(card => {
      if (typeof observer !== 'undefined') {
        observer.observe(card);
      }
    });
    
    // Gérer les événements de clic sur les boutons "Détails"
    document.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', function() {
        const productData = JSON.parse(this.getAttribute('data-product').replace(/&#39;/g, "'"));
        showProductDetails(productData);
      });
    });
  }, 100);
}

// Fonction pour créer la section accessoires
function createAccessoriesSection() {
  const productsSection = document.querySelector('#produits .container');
  
  // Créer la section accessoires si elle n'existe pas
  if (!document.getElementById('accessoires')) {
    const accessoriesSection = document.createElement('section');
    accessoriesSection.className = 'section accessories';
    accessoriesSection.id = 'accessoires';
    accessoriesSection.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Accessoires & Autres Produits</h2>
          <p>Complétez votre expérience avec nos accessoires high-tech</p>
        </div>
        
        <!-- Version Desktop -->
        <div class="product-grid" id="desktop-accessories">
          ${products.accessoires.slice(0, 4).map(product => generateProductCard(product)).join('')}
        </div>
        
        <!-- Version Mobile Carrousel -->
        <div class="carousel-container">
          <div class="carousel-wrapper" id="mobile-accessories">
            ${products.accessoires.slice(0, 4).map(product => generateProductCard(product, true)).join('')}
          </div>
          <!-- Flèches de navigation -->
          <div class="carousel-arrows">
            <div class="carousel-arrow prev" data-carousel="accessories">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="carousel-arrow next" data-carousel="accessories">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div class="scroll-indicators" id="accessories-indicators">
            ${products.accessoires.slice(0, 4).map((_, i) => `<div class="scroll-indicator ${i === 0 ? 'active' : ''}"></div>`).join('')}
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 50px;">
          <button id="showAllProducts" class="btn btn-dark">
            <i class="fas fa-list"></i> Voir tous les produits (${products.montres.length + products.accessoires.length})
          </button>
        </div>
      </div>
    `;
    
    // Insérer après la section produits
    productsSection.parentNode.insertBefore(accessoriesSection, productsSection.nextSibling);
    
    // Gérer le bouton "Voir tous les produits"
    const showAllBtn = document.getElementById('showAllProducts');
    if (showAllBtn) {
      showAllBtn.addEventListener('click', showAllProductsModal);
    }
  }
}

// Fonction pour afficher tous les produits dans un modal
function showAllProductsModal() {
  const allProducts = [...products.montres, ...products.accessoires];
  
  const modalHTML = `
    <div class="modal-overlay">
      <div class="modal-content" style="max-width: 800px; max-height: 80vh; overflow-y: auto;">
        <div class="modal-header">
          <h3>Tous nos produits (${allProducts.length})</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-tabs">
            <button class="modal-tab active" data-category="all">Tous</button>
            <button class="modal-tab" data-category="montres">Montres (${products.montres.length})</button>
            <button class="modal-tab" data-category="accessoires">Accessoires (${products.accessoires.length})</button>
          </div>
          
          <div class="modal-products-grid" id="modalProducts">
            ${allProducts.map(product => `
              <div class="modal-product-card" data-category="${product.category.toLowerCase().includes('montre') ? 'montres' : 'accessoires'}">
                <div class="modal-product-image">
                  <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150x150/0047AB/FFFFFF?text=Elite+Smart'">
                </div>
                <div class="modal-product-info">
                  <h4>${product.name}</h4>
                  <p>${product.description}</p>
                  <div class="modal-product-price">${product.price}</div>
                  <div class="modal-product-actions">
                    <a href="https://wa.me/22674958509?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20${encodeURIComponent(product.name)}" class="btn btn-whatsapp" target="_blank" style="padding: 8px 15px; font-size: 12px;">
                      <i class="fab fa-whatsapp"></i> Commander
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  const modal = document.createElement('div');
  modal.innerHTML = modalHTML;
  document.body.appendChild(modal);
  
  // Ajouter le CSS pour le modal des produits
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    .modal-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    
    .modal-tab {
      padding: 8px 20px;
      border: none;
      background: #f5f5f5;
      border-radius: 20px;
      cursor: pointer;
      transition: var(--transition);
    }
    
    .modal-tab.active {
      background: var(--primary);
      color: white;
    }
    
    .modal-products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .modal-product-card {
      display: flex;
      gap: 15px;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    
    .modal-product-card:hover {
      border-color: var(--primary);
      box-shadow: var(--shadow);
    }
    
    .modal-product-image {
      width: 100px;
      height: 100px;
      flex-shrink: 0;
    }
    
    .modal-product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
    }
    
    .modal-product-info {
      flex: 1;
    }
    
    .modal-product-info h4 {
      margin: 0 0 8px 0;
      color: var(--primary);
    }
    
    .modal-product-info p {
      font-size: 0.9rem;
      margin-bottom: 8px;
      color: var(--gray);
    }
    
    .modal-product-price {
      color: var(--primary);
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    @media (max-width: 768px) {
      .modal-products-grid {
        grid-template-columns: 1fr;
      }
      
      .modal-product-card {
        flex-direction: column;
      }
      
      .modal-product-image {
        width: 100%;
        height: 150px;
      }
    }
  `;
  
  document.head.appendChild(modalStyle);
  
  // Gérer les onglets
  modal.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Mettre à jour les onglets actifs
      modal.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Filtrer les produits
      const allCards = modal.querySelectorAll('.modal-product-card');
      allCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Fermer le modal
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
    modalStyle.remove();
  });
  
  modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === modal.querySelector('.modal-overlay')) {
      modal.remove();
      modalStyle.remove();
    }
  });
}

// Fonction pour afficher les détails d'un produit
function showProductDetails(product) {
  const modalHTML = `
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>${product.name}</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="product-price-large">${product.price}</div>
          <p>${product.description}</p>
          <div class="modal-features">
            <h4>Caractéristiques :</h4>
            <ul>
              <li>Garantie 2 ans</li>
              <li>Livraison gratuite à Ouagadougou</li>
              <li>Support technique 24/7</li>
              <li>Retour sous 14 jours</li>
              <li>Installation et configuration gratuite</li>
            </ul>
          </div>
        </div>
        <div class="modal-actions">
          <a href="https://wa.me/22674958509?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20${encodeURIComponent(product.name)}" class="btn btn-whatsapp" target="_blank" style="flex: 1;">
            <i class="fab fa-whatsapp"></i> Commander maintenant
          </a>
        </div>
      </div>
    </div>
  `;
  
  const modal = document.createElement('div');
  modal.innerHTML = modalHTML;
  document.body.appendChild(modal);
  
  // CSS pour le modal
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      animation: fadeIn 0.3s ease;
    }
    
    .modal-content {
      background: white;
      border-radius: var(--radius);
      padding: 30px;
      max-width: 500px;
      width: 90%;
      animation: slideUp 0.3s ease;
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .modal-header h3 {
      color: var(--primary);
      margin: 0;
    }
    
    .close-modal {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--dark);
    }
    
    .product-price-large {
      font-size: 1.8rem;
      color: var(--primary);
      font-weight: 800;
      margin-bottom: 20px;
    }
    
    .modal-features {
      margin-top: 20px;
    }
    
    .modal-features ul {
      list-style: none;
      padding-left: 0;
    }
    
    .modal-features li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    
    .modal-features li:before {
      content: '✓';
      color: var(--secondary);
      font-weight: bold;
      margin-right: 10px;
    }
    
    .modal-actions {
      margin-top: 30px;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  document.head.appendChild(modalStyle);
  
  // Fermer le modal
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
    modalStyle.remove();
  });
  
  modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === modal.querySelector('.modal-overlay')) {
      modal.remove();
      modalStyle.remove();
    }
  });
}

// ===== EFFET MACHINE À ÉCRIRE =====
const texts = [
    "Montres Connectées de dernière génération ⌚",
    "Smartphones premium et accessoires 📱",
    "Technologie innovante à votre service 💡",
    "Qualité & Garantie Assurées ✅",
    "Livraison rapide à Ouagadougou 🚚"
];
let index = 0, charIndex = 0;
const typingEl = document.getElementById("typing");

function type() {
    if (charIndex < texts[index].length) {
        typingEl.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 60);
    } else {
        setTimeout(erase, 2500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingEl.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Démarrer l'effet machine à écrire
setTimeout(type, 1000);

// ===== MENU MOBILE =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'var(--shadow)';
    }
});

// ===== FORMULAIRE DE CONTACT =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message envoyé ! Nous vous répondrons rapidement.');
        contactForm.reset();
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER =====
const observerOptions = {
    root: null,
    rootMargin: '-50px 0px -100px 0px',
    threshold: 0.1
};

let observer;

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--secondary);
        color: white;
        padding: 15px 25px;
        border-radius: var(--radius);
        z-index: 10000;
        box-shadow: var(--shadow-hover);
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Créer l'observer
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('product-card') || 
                    entry.target.classList.contains('category-card') || 
                    entry.target.classList.contains('why-card') ||
                    entry.target.classList.contains('service-card')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('stats')) {
                    if (!entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                }
            }
        });
    }, observerOptions);
    
    // Sections principales
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Cartes "Pourquoi nous"
    document.querySelectorAll('.why-card').forEach(card => {
        observer.observe(card);
    });
    
    // Afficher les produits
    if (typeof displayProducts === 'function') {
        displayProducts();
    }
    
    // Initialiser les carrousels
    if (typeof initializeCarousels === 'function') {
        initializeCarousels();
    }
});

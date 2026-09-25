/* Doll SKN Real Estate — Main JS */

const SITE = {
  name: 'Doll SKN',
  tagline: 'Real Estate Agency',
  agent: 'Adolceen Woodley',
  address: 'Main Street, Half Way Tree, St. Kitts',
  phone: '+1 (869) 555-0198',
  email: 'hello@dollskn.com',
  license: 'L202625355',
  licenseExpiry: 'December 31, 2026'
};

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'buy.html', label: 'Buy' },
  { href: 'rent.html', label: 'Rent' },
  { href: 'services.html', label: 'Services' },
  { href: 'neighborhoods.html', label: 'Areas' },
  { href: 'testimonials.html', label: 'Reviews' },
  { href: 'contact.html', label: 'Contact' }
];

const PROPERTIES = [
  {
    id: 1,
    title: 'Oceanview Villa — Frigate Bay',
    location: 'Frigate Bay, St. Kitts',
    price: 875000,
    type: 'sale',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
  },
  {
    id: 2,
    title: 'Colonial Estate — Basseterre',
    location: 'Basseterre, St. Kitts',
    price: 1250000,
    type: 'sale',
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 3,
    title: 'Sunset Penthouse — Port Zante',
    location: 'Port Zante, St. Kitts',
    price: 650000,
    type: 'sale',
    beds: 3,
    baths: 2,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 5,
    title: 'Beachfront Condo — Frigate Bay',
    location: 'Frigate Bay, St. Kitts',
    price: 2200,
    type: 'rent',
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'
  },
  {
    id: 6,
    title: 'Modern Apartment — Basseterre',
    location: 'Basseterre, St. Kitts',
    price: 1500,
    type: 'rent',
    beds: 1,
    baths: 1,
    sqft: 750,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
  },
];

function formatPrice(price, type) {
  if (type === 'rent') {
    return `$${price.toLocaleString()}/mo`;
  }
  return `$${price.toLocaleString()}`;
}

function renderHeader() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = NAV_LINKS.map(link =>
    `<a href="${link.href}" class="${currentPage === link.href ? 'active' : ''}">${link.label}</a>`
  ).join('');

  const mobileItems = NAV_LINKS.map(link =>
    `<a href="${link.href}">${link.label}</a>`
  ).join('');

  return `
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
          <!-- ===== LOGO — BIGGER, NO STRETCH + TEXT BESIDE ===== -->
          <img
            src="images/doll_skn_purple_logo.png"
            alt="Doll SKN Real Estate"
            style="height: 72px; width: auto; max-width: none; object-fit: contain; display: block; flex-shrink: 0;"
          >
          <div style="display: flex; flex-direction: column; line-height: 1.15;">
            <span class="logo-main" style="font-size: 1.25rem; font-weight: 700;">${SITE.name}</span>
            <span class="logo-sub" style="font-size: 0.75rem; opacity: 0.8;">${SITE.tagline}</span>
          </div>
        </a>
        <nav class="nav-desktop">${navItems}</nav>
        <a href="contact.html" class="btn btn-primary nav-cta">Get in Touch</a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <nav class="nav-mobile" id="nav-mobile">${mobileItems}</nav>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo" style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
              <!-- ===== LOGO — BIGGER, NO STRETCH + TEXT BESIDE ===== -->
              <img
                src="images/doll_skn_purple_logo.png"
                alt="Doll SKN Real Estate"
                style="height: 64px; width: auto; max-width: none; object-fit: contain; display: block; flex-shrink: 0;"
              >
              <div style="display: flex; flex-direction: column; line-height: 1.15;">
                <span class="logo-main" style="font-size: 1.15rem; font-weight: 700;">${SITE.name}</span>
                <span class="logo-sub" style="font-size: 0.75rem; opacity: 0.75;">${SITE.tagline}</span>
              </div>
            </div>
            <p>Your trusted partner for buying, selling, and renting property across St. Kitts & Nevis. Led by licensed agent ${SITE.agent}.</p>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="buy.html">Properties for Sale</a></li>
              <li><a href="rent.html">Rentals</a></li>
              <li><a href="neighborhoods.html">Neighborhoods</a></li>
              <li><a href="services.html">List Your Property</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About Adolceen</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="testimonials.html">Client Reviews</a></li>
              <li><a href="license.html">License & Credentials</a></li>
            </ul>
          </div>
          <div class="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>📍 ${SITE.address}</li>
              <li>📞 ${SITE.phone}</li>
              <li>✉️ ${SITE.email}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} Doll SKN Real Estate Agency. All rights reserved.</span>
          <span class="license-badge">✦ Licensed Agent · ${SITE.license}</span>
        </div>
      </div>
    </footer>
  `;
}

function renderPropertyCard(property) {
  const priceLabel = formatPrice(property.price, property.type);
  const badgeLabel = property.type === 'rent' ? 'For Rent' : 'For Sale';
  const badgeClass = property.type === 'rent' ? 'rent' : '';

  return `
    <article class="property-card fade-in">
      <a href="property.html?id=${property.id}">
        <div class="property-card-image">
          <img src="${property.image}" alt="${property.title}" loading="lazy">
          <span class="property-badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="property-card-body">
          <div class="property-price">${priceLabel}</div>
          <h3 class="property-title">${property.title}</h3>
          <div class="property-location">📍 ${property.location}</div>
          <div class="property-features">
            <span>🛏 ${property.beds} Beds</span>
            <span>🛁 ${property.baths} Baths</span>
            <span>📐 ${property.sqft.toLocaleString()} sq ft</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function initLayout() {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('nav-mobile');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

function initPropertyListings() {
  const grid = document.getElementById('property-grid');
  if (!grid) return;

  const type = grid.dataset.type;
  let filtered = PROPERTIES;
  if (type) filtered = PROPERTIES.filter(p => p.type === type);

  grid.innerHTML = filtered.map(renderPropertyCard).join('');
  initScrollAnimations();
}

function initPropertyDetail() {
  const container = document.getElementById('property-detail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  const priceLabel = formatPrice(property.price, property.type);
  const badgeLabel = property.type === 'rent' ? 'For Rent' : 'For Sale';

  container.innerHTML = `
    <div class="property-detail-hero">
      <img src="${property.image}" alt="${property.title}">
      <div class="property-detail-overlay">
        <div class="container">
          <span class="eyebrow">${badgeLabel}</span>
          <h1>${property.title}</h1>
          <p class="lead" style="color: rgba(255,255,255,0.85);">📍 ${property.location}</p>
        </div>
      </div>
    </div>
    <section>
      <div class="container property-detail-grid">
        <div class="property-detail-main">
          <div class="property-price" style="font-size: 2.5rem; margin-bottom: 1.5rem;">${priceLabel}</div>
          <p>This stunning property offers the perfect blend of Caribbean charm and modern comfort. Located in one of St. Kitts & Nevis's most desirable areas, it features spacious living areas, premium finishes, and breathtaking views.</p>
          <p style="margin-top: 1rem;">Whether you're seeking a permanent residence, vacation home, or investment opportunity, this property delivers exceptional value in today's market. Schedule a private viewing with Adolceen to experience it firsthand.</p>
          <div class="feature-list">
            <div class="feature-item">🛏 ${property.beds} Bedrooms</div>
            <div class="feature-item">🛁 ${property.baths} Bathrooms</div>
            <div class="feature-item">📐 ${property.sqft.toLocaleString()} sq ft</div>
            <div class="feature-item">🏝 Caribbean Views</div>
            <div class="feature-item">🅿️ Parking Included</div>
            <div class="feature-item">❄️ A/C Throughout</div>
          </div>
          <h3 style="color: var(--teal); margin-bottom: 1rem;">About This Property</h3>
          <p style="color: var(--gray);">Nestled in the heart of ${property.location}, this residence captures the essence of island living. Open floor plans, natural light, and thoughtful design create a welcoming atmosphere for families, couples, and investors alike.</p>
        </div>
        <div class="property-detail-sidebar">
          <h3 style="color: var(--teal); margin-bottom: 1rem;">Schedule a Viewing</h3>
          <p style="font-size: 0.9375rem; color: var(--gray); margin-bottom: 1.5rem;">Interested in this property? Contact Adolceen directly for a private tour.</p>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center; margin-bottom: 1rem;">Contact Agent</a>
          <a href="tel:${SITE.phone.replace(/\s/g, '')}" class="btn btn-secondary" style="width: 100%; justify-content: center;">Call Now</a>
          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--blush);">
            <p style="font-size: 0.8125rem; color: var(--gray);"><strong style="color: var(--teal);">${SITE.agent}</strong><br>Licensed Real Estate Agent<br>${SITE.license}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  initHeaderScroll();
  initMobileMenu();
  initScrollAnimations();
  initContactForm();
  initPropertyListings();
  initPropertyDetail();
});

export { PROPERTIES, SITE, renderPropertyCard, formatPrice };

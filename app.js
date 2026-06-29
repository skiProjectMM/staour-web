(function () {
  const COOKIE_KEY = 'gdpr-notification-shown';

  // Cookie banner
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');

  if (banner && !localStorage.getItem(COOKIE_KEY)) {
    banner.classList.remove('hidden');
  }

  acceptBtn?.addEventListener('click', () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    localStorage.setItem(COOKIE_KEY, '1');
    banner?.classList.add('hidden');
  });

  // Mobile menu
  const menu = document.getElementById('mobile-menu');
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');

  function openMenu() {
    menu?.classList.remove('hidden');
    menu?.setAttribute('aria-hidden', 'false');
    openBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu?.classList.add('hidden');
    menu?.setAttribute('aria-hidden', 'true');
    openBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Video autoplay fallback
  const video = document.querySelector('.video-bg video');
  if (video) {
    video.play().catch(() => {
      document.addEventListener('click', () => video.play(), { once: true });
    });
  }
})();

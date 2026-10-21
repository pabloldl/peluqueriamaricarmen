'use strict';

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.querySelector('.menu-text').textContent = 'Menú';
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.querySelector('.menu-text').textContent = open ? 'Cerrar menú' : 'Menú';
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  const isMobile = window.matchMedia('(max-width: 800px)').matches;
  closeMenu();
  if (isMobile) {
    const section = document.querySelector(link.hash);
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
    section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);

// Native details remain keyboard accessible and usable without JavaScript.
const services = [...document.querySelectorAll('.service-entry')];
services.forEach(entry => entry.addEventListener('toggle', () => {
  if (entry.open) services.forEach(other => { if (other !== entry) other.open = false; });
}));

document.querySelector('.copy-phone').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('685 807 415');
    status.textContent = 'Teléfono copiado: 685 807 415';
  } catch {
    const field = document.createElement('textarea');
    field.value = '685 807 415';
    field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(field);
    field.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Manual alternative below. */ }
    field.remove();
    status.textContent = copied ? 'Teléfono copiado: 685 807 415' : 'Puedes copiar el teléfono manualmente: 685 807 415';
    document.querySelector('.copy-phone').focus();
  }
});

const galleryItems = [...document.querySelectorAll('.gallery-item')];
const dialog = document.querySelector('.lightbox');
const largeImage = document.querySelector('.lightbox-image');
let currentImage = 0;
let returnFocus;
function showImage(index) {
  currentImage = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentImage];
  largeImage.src = item.dataset.image;
  largeImage.alt = item.querySelector('img').alt;
  document.querySelector('#lightbox-title').textContent = item.dataset.category;
  document.querySelector('.image-counter').textContent = `${currentImage + 1} / ${galleryItems.length}`;
}
galleryItems.forEach((item, index) => item.addEventListener('click', () => {
  returnFocus = item;
  showImage(index);
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.previous').addEventListener('click', () => showImage(currentImage - 1));
document.querySelector('.next').addEventListener('click', () => showImage(currentImage + 1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(currentImage - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(currentImage + 1); }
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  returnFocus?.focus({ preventScroll: true });
});

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const animatedElements = [...document.querySelectorAll('.photo-reveal, .text-reveal')];
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('waiting');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  animatedElements.forEach(element => { element.classList.add('waiting'); observer.observe(element); });
  motionPreference.addEventListener('change', event => {
    if (event.matches) { animatedElements.forEach(element => element.classList.remove('waiting')); observer.disconnect(); }
  });
}

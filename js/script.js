'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navegacion');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const mobile=matchMedia('(max-width: 800px)').matches;closeMenu();if(mobile){const target=document.querySelector(a.hash);target.tabIndex=-1;target.focus({preventScroll:true});target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true})}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
matchMedia('(min-width: 801px)').addEventListener('change',closeMenu);
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


const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const rail=document.querySelector('.photo-rail');
function moveRail(direction){rail.scrollBy({left:direction*rail.clientWidth*.75,behavior:reduced.matches?'instant':'smooth'})}
const prev=document.querySelector('.rail-prev'),next=document.querySelector('.rail-next');
prev.addEventListener('click',()=>moveRail(-1));next.addEventListener('click',()=>moveRail(1));
function updateRail(){prev.disabled=rail.scrollLeft<2;next.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-3}
rail.addEventListener('scroll',updateRail,{passive:true});window.addEventListener('resize',updateRail);updateRail();
rail.addEventListener('keydown',e=>{if(e.target===rail&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();moveRail(e.key==='ArrowLeft'?-1:1)}});
if('IntersectionObserver' in window&&!reduced.matches){const elements=[...document.querySelectorAll('.photo-reveal')];const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('waiting');observer.unobserve(e.target)}}),{threshold:.08});elements.forEach(e=>{e.classList.add('waiting');observer.observe(e)});reduced.addEventListener('change',e=>{if(e.matches){elements.forEach(el=>el.classList.remove('waiting'));observer.disconnect()}})}

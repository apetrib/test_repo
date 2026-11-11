// Shared navigation only; approved public copy is rendered in HTML.
const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if (menu && links) {
  const closeMenu = (restoreFocus = false) => {
    const wasOpen = links.classList.contains('open');
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    if (wasOpen && restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1040) closeMenu();
  });
}

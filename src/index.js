import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
  const header = document.createElement('header');
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Rumbera ✨';
  
  const nav = document.createElement('nav');
  
  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Inicio';
  homeBtn.classList.add('active');
  homeBtn.addEventListener('click', () => switchTab('home', homeBtn));
  
  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menú';
  menuBtn.addEventListener('click', () => switchTab('menu', menuBtn));
  
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contacto';
  contactBtn.addEventListener('click', () => switchTab('contact', contactBtn));
  
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  
  header.appendChild(h1);
  header.appendChild(nav);
  
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main-container';
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.textContent = `© ${new Date().getFullYear()} Rumbera. Built with Webpack ✨`;
  return footer;
}

function switchTab(tabName, clickedBtn) {
  const mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = ''; // Clear current content
  
  // Update active button state
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  // Trigger re-animation
  mainContainer.style.animation = 'none';
  mainContainer.offsetHeight; // trigger reflow
  mainContainer.style.animation = null;

  switch(tabName) {
    case 'home':
      mainContainer.appendChild(loadHome());
      break;
    case 'menu':
      mainContainer.appendChild(loadMenu());
      break;
    case 'contact':
      mainContainer.appendChild(loadContact());
      break;
  }
}

function init() {
  const content = document.getElementById('content');
  
  content.appendChild(createHeader());
  
  const main = createMain();
  content.appendChild(main);
  
  content.appendChild(createFooter());
  
  // Load initial tab
  main.appendChild(loadHome());
}

document.addEventListener('DOMContentLoaded', init);

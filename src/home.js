export default function loadHome() {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero');
  
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Los mejores mariscos,<br>en tu mesa.';
  h2.style.fontSize = '3.5rem';
  h2.style.marginBottom = '1.5rem';
  h2.style.lineHeight = '1.1';
  h2.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
  h2.style.webkitBackgroundClip = 'text';
  h2.style.webkitTextFillColor = 'transparent';
  
  const p = document.createElement('p');
  p.textContent = 'Disfruta de nuestros cócteles, caldos, sushis y especialidades del mar con el mejor sabor de México. ¡Un ambiente perfecto para disfrutar!';
  
  const featuresDiv = document.createElement('div');
  featuresDiv.style.display = 'flex';
  featuresDiv.style.gap = '2rem';
  featuresDiv.style.justifyContent = 'center';
  featuresDiv.style.margin = '2.5rem 0';
  featuresDiv.style.fontWeight = '600';
  featuresDiv.style.color = 'var(--secondary-color)';
  
  featuresDiv.innerHTML = `
    <span>🌊 Ingredientes Frescos</span>
    <span>🍋 Recetas Tradicionales</span>
    <span>👨‍🍳 Ambiente Familiar</span>
  `;
  
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = 'Ver el Menú Completo';
  btn.style.fontSize = '1.2rem';
  btn.style.padding = '1rem 2.5rem';
  btn.addEventListener('click', () => {
    document.querySelector('nav button:nth-child(2)').click();
  });
  
  const img = document.createElement('img');
  img.src = 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  img.alt = 'Sabrosos caldos y mariscos mexicanos';
  img.style.maxWidth = '100%';
  img.style.borderRadius = '16px';
  img.style.marginTop = '3rem';
  img.style.boxShadow = '0 10px 40px rgba(0, 240, 255, 0.15)';
  img.style.border = '2px solid var(--border-color)';
  
  heroSection.appendChild(h2);
  heroSection.appendChild(p);
  heroSection.appendChild(featuresDiv);
  heroSection.appendChild(btn);
  heroSection.appendChild(img);
  
  return heroSection;
}

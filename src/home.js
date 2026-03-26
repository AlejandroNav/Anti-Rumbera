export default function loadHome() {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero');
  
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Los mejores mariscos,<br>en tu mesa.';
  
  const p = document.createElement('p');
  p.textContent = 'Disfruta de nuestros cócteles, caldos, sushis y especialidades del mar con el mejor sabor de México. ¡Un ambiente perfecto para disfrutar!';
  
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = 'Ver el Menú';
  btn.addEventListener('click', () => {
    document.querySelector('nav button:nth-child(2)').click();
  });
  
  heroSection.appendChild(h2);
  heroSection.appendChild(p);
  heroSection.appendChild(btn);
  
  return heroSection;
}

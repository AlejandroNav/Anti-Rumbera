export default function loadContact() {
  const contactSection = document.createElement('section');
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Visítanos';
  h2.style.marginBottom = '2rem';
  h2.style.textAlign = 'center';
  
  const container = document.createElement('div');
  container.classList.add('contact-container');
  
  const addressDiv = document.createElement('div');
  addressDiv.classList.add('info-group');
  addressDiv.innerHTML = `
    <h3>Dirección</h3>
    <p>Av. Hidalgo 100<br>Melchor Ocampo, Edomex</p>
    <a href="https://maps.app.goo.gl/d9g7agRK7Wj9KAiDA" target="_blank" style="color: var(--secondary-color); text-decoration: none; font-weight: 600; display: inline-block; margin-top: 5px;">📍 Ver en Google Maps</a>
  `;
  
  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('info-group');
  hoursDiv.innerHTML = '<h3>Horario</h3><p>Lun - Jue: 11:00 am - 8:00 pm<br>Vie - Dom: 10:00 am - 10:00 pm</p>';
  
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('info-group');
  contactDiv.innerHTML = `
    <h3>Comunicación</h3>
    <p>
      <a href="https://wa.me/525562537246" target="_blank" style="color: #25D366; text-decoration: none; font-weight: 600; font-size: 1.1rem;">💬 WhatsApp: (55) 6253 7246</a>
      <br><br>hola@rumbera.restaurant
    </p>
  `;

  const socialDiv = document.createElement('div');
  socialDiv.classList.add('info-group');
  socialDiv.innerHTML = `
    <h3>Redes Sociales</h3>
    <p>
      <a href="https://www.facebook.com/" target="_blank" style="color: #1877F2; text-decoration: none; font-weight: 600; font-size: 1.1rem; margin-right: 20px;">📘 Facebook</a>
      <a href="https://www.instagram.com/" target="_blank" style="color: #E1306C; text-decoration: none; font-weight: 600; font-size: 1.1rem;">📸 Instagram</a>
    </p>
  `;
  
  container.appendChild(addressDiv);
  container.appendChild(hoursDiv);
  container.appendChild(contactDiv);
  container.appendChild(socialDiv);
  
  contactSection.appendChild(h2);
  contactSection.appendChild(container);
  
  return contactSection;
}

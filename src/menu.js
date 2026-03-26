export default function loadMenu() {
  const menuSection = document.createElement('section');
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Nuestro Menú';
  h2.style.marginBottom = '1rem';
  
  const categories = [
    {
      title: 'Entradas',
      items: [
        { name: 'Empanada', price: '$35', desc: 'De camarón, pulpo o combinada.' },
        { name: 'Pescadilla', price: '$15', desc: 'O llévate 3 por $40! Rellenas y fritas.' },
        { name: 'Pescadito', price: '$35', desc: 'Tira de pescado rebosado y frito.' }
      ]
    },
    {
      title: 'Especialidades',
      items: [
        { name: 'Tostada Yemaya', price: '$85', desc: 'Tostada de ceviche de camarón, pulpo y surimi.' },
        { name: 'Tostada Sencilla', price: '$60', desc: 'Camarón, pulpo o surimi.' },
        { name: 'Taco Gobernador', price: '$55', desc: 'Tortilla de harina con camarón, queso, col y mayonesa de chipotle.' },
        { name: 'Hamburguesa de Camarón', price: '$90', desc: 'Acompañada con porción de papas a la francesa.' },
        { name: 'Filete de Pescado', price: '$80', desc: 'Tradicional con guarnición de ensalada y arroz.' },
        { name: 'Camarones', price: '$140', desc: 'Para chuparse los dedos: al mojo de ajo o a la diabla.' },
        { name: 'Mojarra', price: '$200', desc: 'Fresca y entera. Preparada al mojo de ajo o a la diabla.' }
      ]
    },
    {
      title: 'Cocteles',
      items: [
        { name: 'Coctel de Camarón Ch', price: '$70', desc: 'Fresca selección de camarones pequeños con salsa tradicional.' },
        { name: 'Coctel de Camarón GD', price: '$130', desc: 'Porción grande de camarón riquísimo, ¡Pa\' que amarre!' },
        { name: 'Coctel Mixto', price: '$100', desc: 'Variedad de camarón, surimi, pulpo y ostión.' },
        { name: 'Coctel de Pulpo', price: '$115', desc: 'Pulpo tierno en su jugo, preparado con cebolla, cilantro y toque cítrico.' },
        { name: 'Vuelve a la Vida', price: '$125', desc: 'Coctel levanta muertos de mariscos surtidos con salsa especial.' }
      ]
    },
    {
      title: 'Caldos',
      items: [
        { name: 'Caldo Chico de Camarón', price: '$60', desc: 'Caldito picoso para abrir el apetito.' },
        { name: 'Caldo Grande de Camarón', price: '$90', desc: 'Porción sustanciosa y calientita con todo el sabor del mar.' },
        { name: 'Caldo de Camarón', price: '$60', desc: 'Porción clásica con riquísimos fideos caldosos.' },
        { name: 'Marucamaron', price: '$85', desc: 'Fideos estilo oriental preparados al momento con caldo, camarón y verduras.' }
      ]
    },
    {
      title: 'Sushi',
      items: [
        { name: 'Sushi de Surimi', price: '$80', desc: 'Rollo fresco con Alga Nori, aguacate, queso Philadelphia, mango, pepino y surimi.' },
        { name: 'Sushi de Camarón', price: '$95', desc: 'Rollo especial de Alga Nori, aguacate, queso Philadelphia, mango, pepino y camarón.' },
        { name: 'Sushi Empanizado', price: '$100', desc: 'Rollo caliente dorado, relleno de queso, aguacate y nuestro marisco estrella.' }
      ]
    },
    {
      title: 'Postres',
      items: [
        { name: 'Rebanada de Pastel', price: '$60', desc: 'El toque dulce perfecto. Pregunta por nuestro sabor del día.' },
        { name: 'Helado', price: '$30', desc: 'Helado cremoso y frío, ideal para terminar bien la comida.' }
      ]
    },
    {
      title: 'Bebidas',
      items: [
        { name: 'Jarra de Agua Fresca', price: '$60', desc: 'Bebida natural preparada con la fruta de temporada.' },
        { name: 'Refresco', price: '$35', desc: 'Frío y burbujeante, elige tu sabor favorito.' },
        { name: 'Boing', price: '$35', desc: 'Tradicional jugo en botella de vidrio, refrescante y natural.' },
        { name: 'Café', price: '$20', desc: 'Café americano recién colado.' }
      ]
    }
  ];
  
  menuSection.appendChild(h2);

  categories.forEach(category => {
    const catTitle = document.createElement('h3');
    catTitle.textContent = category.title;
    catTitle.style.marginTop = '2.5rem';
    catTitle.style.marginBottom = '1.5rem';
    catTitle.style.color = 'var(--primary-color)';
    catTitle.style.fontSize = '2rem';
    catTitle.style.borderBottom = '2px solid var(--border-color)';
    catTitle.style.paddingBottom = '0.5rem';
    
    const grid = document.createElement('div');
    grid.classList.add('menu-grid');
    grid.style.marginTop = '0';
    
    category.items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('menu-item');
      
      const header = document.createElement('div');
      header.classList.add('menu-item-header');
      
      const title = document.createElement('span');
      title.classList.add('menu-item-title');
      title.textContent = item.name;
      
      const price = document.createElement('span');
      price.classList.add('menu-item-price');
      price.textContent = item.price;
      
      header.appendChild(title);
      header.appendChild(price);
      
      const desc = document.createElement('p');
      desc.classList.add('menu-item-desc');
      desc.textContent = item.desc;
      
      card.appendChild(header);
      card.appendChild(desc);
      
      grid.appendChild(card);
    });
    
    menuSection.appendChild(catTitle);
    menuSection.appendChild(grid);
  });
  
  return menuSection;
}

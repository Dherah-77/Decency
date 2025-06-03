  // Toggle Sidebar
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('menu-cls');
  const sidebar = document.getElementById('sidebar');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
  });

  // PRODUCT SECTION
  const prodSection = document.getElementById('ourprod');
  const closePrd = document.getElementById('prod-close');
  

  // OPEN PRODUCTS
  document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      prodSection.classList.remove('hidden');
      sidebar?.classList.add('hidden');
      menuBtn?.classList.remove('hidden');
    });
  });

  // Close product section
  closePrd?.addEventListener('click', () => {
    prodSection.classList.add('hidden');
    closeBtn.classList.add('hidden')
  });

  //ABOUT US 
  
   const aboutSection = document.getElementById('about-section');
  const openAbout = document.getElementById('about-open');
  const closeAbout = document.getElementById('about-close');

  openAbout.addEventListener('click', () => {
    aboutSection.classList.remove('hidden');
  });

  closeAbout.addEventListener('click', () => {
    aboutSection.classList.add('hidden');
  });

  openAbout.addEventListener('click', () => {
    sidebar.classList.add('hidden')
  });

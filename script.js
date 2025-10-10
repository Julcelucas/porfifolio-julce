// ===== Scroll suave ao clicar nos links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const alvo = document.querySelector(this.getAttribute('href'));
      if (alvo) {
        window.scrollTo({
          top: alvo.offsetTop - 70, // Compensa a altura do menu fixo
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ===== Destacar o link ativo conforme rolagem =====
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let atual = '';
  
    sections.forEach(sec => {
      const topo = window.scrollY;
      const offset = sec.offsetTop - 150;
      const altura = sec.offsetHeight;
  
      if (topo >= offset && topo < offset + altura) {
        atual = sec.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(atual)) {
        link.classList.add('active');
      }
    });
  });
  
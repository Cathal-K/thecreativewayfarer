function classToggle() {
    const navs = document.querySelectorAll('.full-nav')
    
    navs.forEach(nav => nav.classList.toggle('open'));
  }

  document.querySelector('.mobile-nav-menu')
    .addEventListener('click', classToggle);
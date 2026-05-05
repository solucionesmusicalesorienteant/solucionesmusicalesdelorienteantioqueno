export function initScrollActions() {
  const sections = document.querySelectorAll('section[id]')
  const header = document.getElementById('header')
  const scrollTopBtn = document.getElementById('scroll-top')

  const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 90
      const sectionId = current.getAttribute('id')
      const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link')
        } else {
          navLink.classList.remove('active-link')
        }
      }
    })
  }

  const scrollHeader = () => {
    if (window.scrollY >= 100) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  }

  const scrollTop = () => {
    if (window.scrollY >= 560) scrollTopBtn.classList.add('show-scroll')
    else scrollTopBtn.classList.remove('show-scroll')
  }

  window.addEventListener('scroll', () => {
    scrollActive()
    scrollHeader()
    scrollTop()
  })

  scrollActive()
  scrollHeader()
  scrollTop()

  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false
  })

  sr.reveal(`.home__data, .home__carousel, .services__content, .portfolio__content, .contact__data, .footer__content`, {
    interval: 200
  })
}

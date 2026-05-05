export function initNavMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }

  const navLinks = document.querySelectorAll('.nav__link')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show-menu')
    })
  })
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

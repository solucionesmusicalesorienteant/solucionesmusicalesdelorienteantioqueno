export function initCarousel() {
  const carousel = document.querySelector('.carousel')
  if (!carousel) return

  const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
  const prevButton = carousel.querySelector('.carousel__button--prev')
  const nextButton = carousel.querySelector('.carousel__button--next')
  const dotsNav = carousel.querySelector('.carousel__nav')
  let activeIndex = 0
  let autoplayTimer = null

  const updateSlides = index => {
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === index
      slide.classList.toggle('active', isActive)
      slide.setAttribute('aria-hidden', !isActive)
    })

    const dots = dotsNav.querySelectorAll('.carousel__dot')
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index)
      dot.setAttribute('aria-pressed', dotIndex === index)
    })
  }

  const goToSlide = index => {
    activeIndex = (index + slides.length) % slides.length
    updateSlides(activeIndex)
  }

  const nextSlide = () => goToSlide(activeIndex + 1)
  const prevSlide = () => goToSlide(activeIndex - 1)

  const createDots = () => {
    slides.forEach((_, index) => {
      const dot = document.createElement('button')
      dot.type = 'button'
      dot.className = 'carousel__dot'
      dot.setAttribute('aria-label', `Ir a la diapositiva ${index + 1}`)
      dot.addEventListener('click', () => {
        goToSlide(index)
        resetAutoplay()
      })
      dotsNav.appendChild(dot)
    })
  }

  const startAutoplay = () => {
    stopAutoplay()
    autoplayTimer = window.setInterval(nextSlide, 5500)
  }

  const stopAutoplay = () => {
    if (autoplayTimer) window.clearInterval(autoplayTimer)
  }

  const resetAutoplay = () => {
    stopAutoplay()
    startAutoplay()
  }

  if (prevButton) prevButton.addEventListener('click', () => { prevSlide(); resetAutoplay() })
  if (nextButton) nextButton.addEventListener('click', () => { nextSlide(); resetAutoplay() })
  carousel.addEventListener('mouseenter', stopAutoplay)
  carousel.addEventListener('mouseleave', startAutoplay)

  createDots()
  updateSlides(activeIndex)
  startAutoplay()
}

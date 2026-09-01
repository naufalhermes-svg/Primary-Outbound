// Scroll reveal animation.
// Elements with class "reveal" fade in + slide up when entering viewport.
// Respects prefers-reduced-motion via global.css utility.

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
)

document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
  observer.observe(el)
})

const burger = document.querySelector("div[data-behavior='burger']")
const nav = document.querySelector("ul[data-behavior='nav_links']")
const navLinks = document.querySelectorAll("li[data-behavior='nav_list']")

burger.addEventListener('click', () => {
  nav.classList.toggle('c-nav--active')

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.2}s`
    }
  })
})

const buttons = document.querySelector("div[data-behavior='promo_button']")

buttons.addEventListener('click', () => {
  document.location.href = "https://github.com/davidliamwalsh";
})
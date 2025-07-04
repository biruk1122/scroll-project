// sellect the html element with id 'date'
const date = document.getElementById("date")
//set its content to the current year
date.innerHTML = new Date().getFullYear()

// close links (toggle navbar menu in mobile view)
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

//add a click event listener to the toggle button
navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links")
  // Get the current height of the links container
  const containerHeight = linksContainer.getBoundingClientRect().height
  // Get the full height of the links
  const linksHeight = links.getBoundingClientRect().height

  // If container is collapsed, expand it to fit links
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    // Otherwise collapse it
    linksContainer.style.height = 0
  }
})

const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")

// Fixed navbar and show "top" link on scroll
window.addEventListener("scroll", function () {
  // Get how far the page has been scrolled vertically
  const scrollHeight = window.pageYOffset
  // Get the navbar height
  const navHeight = navbar.getBoundingClientRect().height

  // If scrolled past the navbar height, add class to fix navbar at top
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav")
  }

  // Show "top" link if scrolled more than 500px down
  if (scrollHeight > 500) {
    topLink.classList.add("show-link")
  } else {
    topLink.classList.remove("show-link")
  }
})

// smooth scroll (when clicking nav links)
const scrollLinks = document.querySelectorAll(".scroll-link")

// Loop through each scroll link
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Prevent default anchor behavior (jumping to section)
    e.preventDefault()
    // Get the id from the href attribute and remove the '#' symbol
    const id = e.currentTarget.getAttribute("href").slice(1)
    const element = document.getElementById(id)

    // Get relevant heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains("fixed-nav")

    // Calculate the position to scroll to
    // Start by subtracting navbar height
    let position = element.offsetTop - navHeight

    if (!fixedNav) {
      // Adjust again if navbar is not fixed
      position = position - navHeight
    }
    if (navHeight > 82) {
      // Adjust if navbar height is large (menu expanded)
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    // Collapse the menu after clicking
    linksContainer.style.height = 0
  })
})

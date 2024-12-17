const navbarLinks = document.querySelectorAll('.nav-in a');
const sections = document.querySelectorAll('.sections');
console.log(navbarLinks)
console.log(sections)
// Add scroll event listener
window.addEventListener('scroll', () => {
  let current = ''; // Track the currently visible section

  // Loop through sections to find the current one
  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 145; // Offset to account for navbar height
    const sectionHeight = section.offsetHeight;

    // console.log(section.offsetTop,"settop")
    // console.log(section.offsetHeight,"setheight")
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id'); // Get the id of the current section
      console.log(current,"current111")
    }
  });
// console.log("check")
  // Remove 'active' class from all links and add it to the current one
  navbarLinks.forEach((link) => {
    // console.log("check")
    link.classList.remove('active');
    // console.log("first")
    // console.log(link.getAttribute('href'))
    // console.log("last")
    console.log(link.getAttribute('href') === `#${current}`)
    if (link.getAttribute('href') === `#${current}`) {
        // console.log(link.getAttribute('href') ,"href")
        // console.log(current,"current")
      link.classList.add('active');
    }
  });
});
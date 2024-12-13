let a = document.querySelectorAll('.nav .nav-in a')

a.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        console.log("clicked")
        console.log(e.target.textContent)

          // Remove the 'active' class from all links
          a.forEach(link => link.classList.remove('active'));

          // Add the 'active' class to the clicked link
          e.target.classList.add('active');
  
          console.log("Clicked:", e.target.textContent); // Log clicked link text
    })
})
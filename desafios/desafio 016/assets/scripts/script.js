button = document.body.querySelector('#dark-mode')
themeDark = false
const body = document.body;

// When reenter the website return the old theme
const savedTheme = localStorage.getItem('theme');
darkTheme(savedTheme === 'dark');

console.log('Saved theme ' + savedTheme)

// Function to change the theme
function darkTheme(themeDark) {
  
  console.log('darkTheme executed')

  if (themeDark == true) {

    body.classList.add('dark')

    themeDark = true
  } else {

    body.classList.remove('dark')
    themeDark = false
  }
  console.log('Theme now is: ' + (themeDark ? 'Dark' : 'Light'))
}

button.addEventListener('click', () => {
  const isdark = body.classList.toggle('dark');
  darkTheme(isdark);
  localStorage.setItem('theme', isdark ? 'dark' : 'light');
  console.log('Button event executed ' + isdark)
});

// Low Scroll on header
const navLinks = document.querySelectorAll('header nav ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    console.log('link clicked')
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
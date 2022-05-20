const hammer = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation_links');

// hammer.addEventListener('click', () =>{
//     if (navLinks.style.display === 'flex') {
//         navLinks.style.display = 'none'
//     } else {
//         navLinks.style.display = 'flex'
//     }
//      navLinks.style.display = 'flex'
// });

hammer.addEventListener('click', () =>{
    if (navLinks.style.transform === 'scaleY(1)') {
        navLinks.style.transform = 'scaleY(0)';
    } else {
        navLinks.style.transform = 'scaleY(1)'
    }
    // navLinks.style.display = 'flex'
});




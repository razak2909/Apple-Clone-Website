let nav_list = document.getElementById('nav-list');
let openMenu = document.querySelector('.menuopen');
let cross = document.querySelector('.cross');

openMenu.addEventListener('click', () => {
    nav_list.style.opacity = '1'; // Change '100%' to '1'
    openMenu.style.display = 'none';
});

cross.addEventListener('click', () => {
    nav_list.style.opacity = '0'; // Change '0%' to '0'
    openMenu.style.display = 'block';
});

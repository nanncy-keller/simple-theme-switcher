'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    this.textContent = isDark ? "Light" : "Dark";
    
    console.log('Current theme: ' + (isDark ? 'dark' : 'light'));
});
const checkbox = document.querySelector('.checkbox');
const header = document.querySelector('header');
const headerA = document.querySelectorAll('header a');
const hero = document.querySelector('.hero');
const coulmn = document.querySelector('.column');
const files = document.querySelector('.files');
const about = document.querySelector('.about');
const testimonials = document.querySelector('.testimonials');
const testCont = document.querySelectorAll('.test-cont');
const contact = document.querySelector('.contact');
const box = document.querySelector('.early-access-box');
const input = document.querySelector('.access-input');
const black = document.querySelector('.black');
const white = document.querySelector('.white');

checkbox.addEventListener('change', ()=>{

    header.classList.toggle('dark-mode');
    hero.classList.toggle('dark');
    files.classList.toggle('dark');
    coulmn.classList.toggle('dark');
    about.classList.toggle('dark');
    testimonials.classList.toggle('dark');
    contact.classList.toggle('dark');
    box.classList.toggle('dark');
    input.classList.toggle('dark');
    black.classList.toggle('hide');
    white.classList.toggle('undo');

    testCont.forEach(cont=>{
        cont.classList.toggle('dark');
    });

    headerA.forEach(head => {
        head.classList.toggle('dark-mode');    
    });
 
});
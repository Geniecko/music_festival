window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            document.querySelector('.navigation').classList.add('navigation--scrolled');
        } else {
            document.querySelector('.navigation').classList.remove('navigation--scrolled');
        }
    })
});
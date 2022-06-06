export const changeNavOnScroll = (nav) => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            nav.classList.add('navigation--scrolled');
        } else {
            nav.classList.remove('navigation--scrolled');
        }
    })
}
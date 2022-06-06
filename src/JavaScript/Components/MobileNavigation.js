window.addEventListener('DOMContentLoaded', () => {
    const mobileTriggerOpen = document.getElementById('navTrigger--open');
    const mobileTriggerClose = document.getElementById('navTrigger--close');
    const mobileMenuList = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

    function showMobileMenu(){
        mobileMenuList.classList.add('show');
        document.body.classList.add('disable-scroll');
    }

    function hideMobileMenu(){
        mobileMenuList.classList.remove('show');
        document.body.classList.remove('disable-scroll');
    }

    mobileTriggerOpen.addEventListener('click', () => {
        showMobileMenu();
    
        mobileNavLinks.forEach(link => link.addEventListener('click', hideMobileMenu));
    });

    mobileTriggerClose.addEventListener('click', hideMobileMenu);
});
import './Components/MobileNavigation';

import {changeNavOnScroll} from './Function/changeNavOnScroll';

window.addEventListener('DOMContentLoaded', () => {

    // Change navigation styles when user scroll down
   changeNavOnScroll(document.querySelector('.navigation'));

});
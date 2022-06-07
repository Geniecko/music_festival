import './Components/MobileNavigation';
import './Components/InputPlaceholder';

import {changeNavOnScroll} from './Function/changeNavOnScroll';

window.addEventListener('DOMContentLoaded', () => {

    // Change navigation styles when user scroll down
   changeNavOnScroll(document.querySelector('.navigation'));


   document.querySelector('.checkbox').addEventListener('change', () => {
    console.log(document.querySelector('.checkbox').checked);
   })
});
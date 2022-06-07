import './Components/InformationSiteModal';
import './Components/MobileNavigation';
import './Components/InputPlaceholder';
import './Components/SplideInit';

import {changeNavOnScroll} from './Function/changeNavOnScroll';

window.addEventListener('DOMContentLoaded', () => {

    // Change navigation styles when user scroll down
   changeNavOnScroll(document.querySelector('.navigation'));
});
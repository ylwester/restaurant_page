import {pageLoad} from "./page-load";
import'./styles.css';
import {menuPage} from "./menuPage";
import {aboutUsPage} from "./about-us-page";
import {contactPage} from "./contactPage";
import {homePage} from "./homePage";

function wipeContent() {
    const tabContent = document.getElementById('tab-content');
        while (tabContent.firstChild) {
            tabContent.removeChild(tabContent.lastChild);
        }
}


function menuTabs() {
    homePage();
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', () => {
        wipeContent();
        homePage();
    })

    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', () => {
        wipeContent();
        menuPage();
    })

    const aboutUsButton = document.getElementById('about-us');
    aboutUsButton.addEventListener('click', () => {
        wipeContent();
        aboutUsPage();
    });

    const contactButton = document.getElementById('contact');
    contactButton.addEventListener('click', () => {
        wipeContent();
        contactPage();
    });
}

pageLoad();
menuTabs();

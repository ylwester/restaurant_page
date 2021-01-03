
function pageLoad() {
    const content = document.getElementById('content');
    //header
    const header = document.createElement('header');
    header.classList.add('header');
    const headerText = document.createElement('h2');
    headerText.textContent = "Restaurant page";
    header.appendChild(headerText);
    content.appendChild(header);

    //navbar
    const buttons = ['Home', 'Menu', 'About us', 'Contact'];
    const navigation = document.createElement('nav');
    content.appendChild(navigation);
    const menu = document.createElement('ul');
    navigation.appendChild(menu);
    menu.classList.add('menu');

    buttons.forEach((button) => {
        let idName = button.toLowerCase().split(" ").join("-")
        const tab = document.createElement('li');
        // const link = document.createElement('a');
        // link.setAttribute('href', '#');
        tab.setAttribute('id', idName);
        tab.textContent = button;
        // tab.appendChild(link);
        menu.appendChild(tab);
    })



    // const tab = document.createElement('li');
    // menu.appendChild(tab)

}


export {pageLoad}
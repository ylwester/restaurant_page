
function pageLoad() {
    const content = document.getElementById('content');
    //header
    const header = document.createElement('header');
    header.classList.add('header');
    const headerText = document.createElement('h3');
    headerText.textContent = "RESTAURANT";
    header.appendChild(headerText);
    content.appendChild(header);

    //navbar
    const buttons = ['Home', 'Menu', 'About us'];
    const navigation = document.createElement('nav');
    navigation.classList.add('navigation-bar');
    header.appendChild(navigation);
    const menu = document.createElement('ul');
    navigation.appendChild(menu);
    menu.classList.add('menu');

    buttons.forEach((button) => {
        let idName = button.toLowerCase().split(" ").join("-")
        const tab = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        tab.setAttribute('id', idName);
        link.textContent = button;
        tab.appendChild(link);
        menu.appendChild(tab);
    })

    const contact = document.createElement('button');
    contact.textContent = "Contact";
    header.appendChild(contact);


    // const tab = document.createElement('li');
    // menu.appendChild(tab)

}


export {pageLoad}
function contactPage() {
    const text = "You can find us on Groove Street 5"
    const tabContent = document.getElementById('tab-content');
    const tabName = document.createElement('h1');
    tabName.textContent = "Contact";

    const description = document.createElement('div');
    description.setAttribute('id', 'content-description');

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    tabContent.appendChild(tabName);
    tabContent.appendChild(description);
    description.appendChild(paragraph);

}

export {contactPage}
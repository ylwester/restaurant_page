function homePage() {
    const tabContent = document.getElementById('tab-content');
    const tabName = document.createElement('h1');
    tabName.textContent = "Our Restaurant";
    const text = "Welcome to our beautiful restaurant, feel free to order our delicious food";

    const description = document.createElement('div');
    description.setAttribute('id', 'content-description');

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    tabContent.appendChild(tabName);
    tabContent.appendChild(description);
    description.appendChild(paragraph);
}

export {homePage}
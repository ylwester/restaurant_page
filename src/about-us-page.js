function aboutUsPage() {
    const text = "Welcome to our beautiful restaurant, feel free to order our delicious food";
    const tabContent = document.getElementById('tab-content');
    const tabName = document.createElement('h1');
    tabName.textContent = "About us";

    const description = document.createElement('div');
    description.setAttribute('id', 'content-description');

    const paragraph = document.createElement('p');
    paragraph.textContent = text



    tabContent.appendChild(tabName);
    tabContent.appendChild(description);
    description.appendChild(paragraph);
}

export {aboutUsPage}
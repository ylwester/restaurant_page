function aboutUsPage() {
    const tabContent = document.getElementById('tab-content');
    const tabName = document.createElement('h1');
    tabName.textContent = "About us";

    const text = "We are great restaurant with 55 years old history";

    const description = document.createElement('div');
    description.setAttribute('id', 'content-description');

    const paragraph = document.createElement('p');
    paragraph.textContent = text

    tabContent.appendChild(tabName);
    tabContent.appendChild(description);
    description.appendChild(paragraph);
}

export {aboutUsPage}
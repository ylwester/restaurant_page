function menuPage() {
    const tabContent = document.getElementById('tab-content');
    const tabName = document.createElement('h1');
    tabName.textContent = "Menu";

    tabContent.appendChild(tabName);


}

export {menuPage}
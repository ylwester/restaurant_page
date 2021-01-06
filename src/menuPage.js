function menuPage() {
    const tabContent = document.getElementById('tab-content');
    const tabName = document.createElement('h1');
    tabName.textContent = "Menu";

    tabContent.appendChild(tabName);

    const menu =  {
        "Appetizers" : [
            {
                "name": "Greek salad with feta cheese",
                "price": 10,
            },
            {
                "name": "Beefsteak tatar",
                "price" : 12,
            }],
        "Soups" : [
            {
                "name": "Mushroom soup with homemade pasta",
                "price" : 7,
            }],
        "Main Dishes" : [
            {
                "name": "Salmon with sugar pees",
                "price": 14,
            },
            {
                "name": "Chicken fillet with grilled cheese",
                "price": 11,
            },
            {
                "name": "Pork roasted in its own sauce",
                "price": 17,
            }],
        "Desserts" : [
            {
                "name": "Hot apple pie",
                "price": 3,
            },
            {
                "name": "Cherry cake",
                "price": 3.5,
            }],
        "Drinks" : [
            {
                "name": "Tea",
                "price": 1.5,
            },
            {
                "name": "Coffee",
                "price": 1,
            },
            {
                "name": "Coke",
                "price": 1.5,
            },
        ],
    }




    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');


    const menuKeysArray = [];
    for(let k in menu){
        menuKeysArray.push(k);
    }
    menuKeysArray.forEach(value => {
        const myPara1 = document.createElement('h2');
        myPara1.textContent = value;
        menuContainer.appendChild(myPara1);
        menu[value].forEach(position => {
            const myPara2 = document.createElement('p');
            myPara2.textContent = position.name + "....$" + position.price;
            menuContainer.appendChild(myPara2);
        })
    })


    tabContent.appendChild(menuContainer);


}

export {menuPage}
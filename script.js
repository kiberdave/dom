// 1
const mainTitle = document.getElementById(`title`);
mainTitle.textContent = `Welcome to JavaScript`;

// 2
const firstP = document.querySelector(`p`);
firstP.textContent = `DOM is easy`;

// 3
const allItems = document.querySelectorAll(`.item`);
allItems.forEach(item => {
    console.log(item.textContent);
})

// 4
const colorChangeText = document.querySelector(`#message`);
const colChangeBtn = document.querySelector(`#changeColorBtn`);

colChangeBtn.addEventListener(`click`, () => {
    if(colorChangeText.style.color === "red"){
        colorChangeText.style.color = ``;
    }else{
        colorChangeText.style.color = `red`;
    }
})

// 5
const box = document.querySelector(`#box`);
const changeBackgroundBtn = document.querySelector(`#changeBackgroundBtn`);

changeBackgroundBtn.addEventListener(`click`, () => {
    if(box.style.backgroundColor === "lightblue"){
        box.style.backgroundColor = ``;
    }else{    
        box.style.backgroundColor = "lightblue";
    }
    })

// 6
const card = document.querySelector(`#card`);
const activateBtn = document.querySelector(`#activateBtn`);

activateBtn.addEventListener(`click`, () => {
    card.classList.add(`active`);
})

// 7
const content = document.querySelector(`#content`);
const showBtn = document.querySelector(`#showBtn`);

showBtn.addEventListener(`click`, () => {
    content.classList.remove(`hidden`);
    content.removeAttribute(`class`);
})

// 8
const themeBox = document.querySelector(`#themeBox`);
const toggleThemeBtn = document.querySelector(`#toggleThemeBtn`);

toggleThemeBtn.addEventListener(`click`, () => {
    themeBox.classList.toggle(`dark`);
})

// 9
const technologies = document.querySelector(`#technologies`);
const newLi = document.createElement(`li`);

newLi.textContent = `React`;

technologies.append(newLi);

// 10
const notification = document.querySelector(`#notification`);
const removeBtn = document.querySelector(`#removeBtn`);

removeBtn.addEventListener(`click`, () => {
    notification.remove();
})

// 11
const photo = document.querySelector(`#photo`);
const changeImageBtn = document.querySelector(`#changeImageBtn`);

changeImageBtn.addEventListener(`click`, ()=>{
    photo.setAttribute(`src`, `https://www.prepressure.com/images/design_resolution_original.jpg`);
    photo.setAttribute(`alt`, `New image`);
})

// 12
const websiteLink = document.querySelector(`#websiteLink`);
const hrefValue = websiteLink.getAttribute(`href`);
console.log(hrefValue);

// 13
const usernameInput = document.querySelector(`#usernameInput`);
const submitBtn = document.querySelector(`#submitBtn`);

submitBtn.addEventListener(`click`, ()=>{
    const enteredText = usernameInput.value;
    console.log(enteredText);
})

// 14
const nameInput = document.querySelector(`#nameInput`);
const greetBtn = document.querySelector(`#greetBtn`);
const nameResult = document.querySelector(`#result`);

greetBtn.addEventListener(`click`, ()=>{
    const addName = nameInput.value;
    nameResult.textContent = `Hello, ${addName}`;
})

// 15
const counter = document.querySelector(`#counter`);
const increaseBtn = document.querySelector(`#increaseBtn`);

let count = 0;

function increaser(){
    count++;
    counter.textContent = count;
}

increaseBtn.addEventListener(`click`, increaser)

// 16
const description = document.querySelector(`#description`);
const toggleBtn = document.querySelector(`#toggleBtn`);

function showHide(){
    description.classList.toggle(`hidden`);
}

toggleBtn.addEventListener(`click`, showHide);

// 17
const productInput = document.querySelector(`#productInput`);
const addProductBtn = document.querySelector(`#addProductBtn`);
const productList = document.querySelector(`#productList`);

function addNewProduct (){
    const inputValue = productInput.value;
    const liEl = document.createElement(`li`);
    liEl.setAttribute(`class`, `productItem`);
    liEl.textContent = inputValue;

    productList.appendChild(liEl);
    productInput.value = ``;
}

addProductBtn.addEventListener(`click`, addNewProduct);

// 18

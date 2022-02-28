console.log("Javascript - лучший язык программирования!");

// Смена приветствия
let greet = document.querySelector("#greeting");
greet.textContent = "Привет Виталий Валентинович!";


// Фон для каждого li
let liElements = document.querySelectorAll("li");
for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.backgroundColor = "yellow";
}


// Создать и вложить img
let newImg = document.createElement("img");
let brTag = document.createElement("br");
greet.appendChild(brTag);
greet.appendChild(newImg);
newImg.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");



// Добавить ul в конец body с классом "todo-items"
let newUl = document.createElement('ul');
document.body.append(newUl);
newUl.classList.add("todo-items");

let numberList = '';
let liList = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];
for (let i = 0; i < liList.length; i++) {
    newLi = document.createElement("li");
    newLi.textContent = liList[i];
    newUl.append(newLi);
}

// Убрать selected из всех li
function removeSelected() {
    let removeSelect = document.querySelectorAll("li");
    for (let i = 0; i < removeSelect.length; i++) {
        removeSelect[i].classList.remove("selected");
    }
}
removeSelected();

// Добавьте класс selected к <li> при щелчке по нём

let button = document.querySelector("#essentials");
button.addEventListener("click", addSelected, false);
function addSelected(e) {
    event.target.classList.add('selected');
    var picId = '';
    picId = event.target;

}

console.log(picId);
let pictureList = ['images/milk.jpg', 'images/honey.jpg', 'images/water.jpg', 'images/wine.jpg', 'images/beer.jpg'];
let newImg2 = document.querySelectorAll("#img");
newImg2.setAttribute("src", pictureList[picId])
// Измените изображение, чтобы оно было последним выбранным продуктом питания.





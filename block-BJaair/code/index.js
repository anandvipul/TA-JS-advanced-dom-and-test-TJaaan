

// Work Flow
// 1. The form accepts the input
// 2. Data is used to make Notice Object
// 3. it appends the notice object in arrNotice
// 4. UpdateUI accesses the array and uses the function createNoticeComponent to make the UI

let i = 0;

class Notice {
    constructor(category, title) {
        this.title = title;
        this.category = category;
        this.index = i;
        i++;
    }
}

let a = new Notice('study', 'That is good');
let ab = new Notice('study', 'That is good 2');

let arrNotice = [
    a, ab
];


function createNoticeComponent(obj) {
    let article = document.createElement('article');
    article.classList.add('notice');
    article.setAttribute('data-index', obj.index);
    article.addEventListener('dblclick', (article) => {
        editHandler(article);
    });
    let category = document.createElement('h3');
    category.classList.add('category');
    category.innerText = obj.category;
    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = obj.title;
    article.append(category);
    article.append(title);
    return article;
}


function updateUI(arr) {
    // arr is the array containing Notice Object
    let root = document.querySelector(".notice-container");
    for (let item of arrNotice) {
        let htmlComp = createNoticeComponent(item);
        root.append(htmlComp);
    }
}


function editHandler(article) {
    //
    article.preventDefault();
    
    console.log(article.target.parentElement.getAttribute('data-index'));

    arrNotice.splice(article.target.parentElement.getAttribute('data-index'), 1, article);

    if (article.target.classList[0] == "title") {
        let editInput = document.createElement('input');
        editInput.addEventListener('onkeyup', (event) => {
            console.log(event.target.innerText);
        });
        article.target.replaceWith(editInput);
        console.log(editInput.value);
    } else if (article.target.classList[0] == "category") {
        {}
    } else {}

    
    // console.dir(article.target);
    
}


let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    // form.preventDefault();
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    arrNotice.push(new Notice(category, title));
    updateUI(arrNotice);
});



updateUI(arrNotice);
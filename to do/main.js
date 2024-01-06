let input = document.getElementById('input');

let addBtn = document.getElementById('add');

let table = document.getElementById('table');

let temp = [];

let valueHolder = [];




function addTask() {

    let inputValue = input.value;

    if (inputValue != "") {

        valueHolder.push(inputValue);

        RENDER()

    }

    input.value = ""

    let removeBtns = document.querySelectorAll('.remove');

    let doneBtns = document.querySelectorAll('.tableBTN');

    for (const removeBtn of removeBtns) {

        removeBtn.addEventListener('click', remove)

    }

    for (const doneBtn of doneBtns) {

        doneBtn.addEventListener('click', done)

    }

}



function RENDER() {


    let li = valueHolder.map(task => {



        return `<li class ="li" > ${task} <span> <button class = "tableBTN"> DONE </button> <button class = "remove"> REMOVE </button> </span> </li>`



    }).join('')

    table.innerHTML = li;

}

function remove() {



    

}

function done() {

    this.parentElement.parentElement.classList.toggle('done')


}


addBtn.addEventListener('click', addTask)
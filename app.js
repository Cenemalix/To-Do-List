const form = document.querySelector('form');
const todo = document.querySelector('#todo');
const time = document.querySelector('#time');
const list = document.querySelector('#list');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoValue = todo.value;
    const timeValue = time.value;
    const newLI = document.createElement('li');
    newLI.innerText = `${timeValue}: ${todoValue}`
    list.append(newLI)
    todo.value = "";
    time.value = "";
    newLI.addEventListener('click', (e) => {
        e.preventDefault();
        newLI.remove();
    })
})
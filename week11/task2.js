const taskList = document.getElementById('taskList');

let button = document.getElementById('btn');

function addTask() {
    const newTask = document.createElement('li');
    newTask.classList.add('elem');
    newTask.textContent = document.getElementById('input').value;
    taskList.append(newTask);
}

button.addEventListener('click', addTask);

const list = document.querySelector('ul');

list.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
    evt.target.classList.add('listEl');
    }
});
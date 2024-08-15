const input = document.getElementById('add-task');
const button = document.querySelector('button');
const taskList = document.getElementById('tasks-list');

const addTask = () => {
    if(input.value) {
        let newTask = document.createElement('div');
        newTask.classList.add('task');

        // text by user
        let text = document.createElement('p');
        text.innerText = input.value;
        newTask.appendChild(text);
        //icons 
        let icons = document.createElement('div');
        icons.classList.add('icons');
        newTask.appendChild(icons);

        let complete = document.createElement('i');
        complete.classList.add('bi', 'bi-check-circle-fill', 'icon-complete');
        complete.addEventListener('click', completeTask);


        let remove = document.createElement('i');
        remove.classList.add('bi', 'bi-trash3-fill', 'icon-remove');
        remove.addEventListener('click', removeTask)

        icons.append(complete, remove);

        // add task list
        taskList.appendChild(newTask);

    } else {
        alert('please, add a new task');
    };
};

const completeTask = (e) => {
    let task = e.target.parentNode.parentNode;
    task.classList.toggle('complete');
};

const removeTask = (e) => {
    let task = e.target.parentNode.parentNode;
    task.remove();
};


button.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
});

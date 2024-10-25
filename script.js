function updateTime() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString();
}
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement('li');
    li.className = prioritySelect.value;
    li.innerText = taskInput.value;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'remove';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = ""; 
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

setInterval(updateTime, 1000);
updateTime(); 
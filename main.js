/*const taskList = document.getElementById("taskList");
let tasks = [];


function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const newTaskText = newTaskInput.value.trim();
  
    if (newTaskText !== "") {
      const newTask = {
        id: Date.now(), 
        text: newTaskText,
        completed: false
      };
  
      tasks.push(newTask);
      renderTasks();
      newTaskInput.value = ""; 
    }
  }

function renderTasks() {
    taskList.innerHTML = ""; 
  
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      `;
      taskList.appendChild(li);
    });
  } */
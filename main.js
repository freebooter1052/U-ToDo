// Variable to keep track of the last checked task
let lastCheckedTask = null;

// Show the task input box and confirm button
function showTaskInput() {
    document.getElementById('taskInput').style.display = 'block';
    document.getElementById('confirmBtn').style.display = 'block';
    document.querySelector('.create-task-btn').style.display = 'none';
}

// Add task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        const taskList = document.getElementById('taskList');
        
        // Remove the "No current tasks" message if it's the first task
        const noTasksMessage = document.getElementById('noTasksMessage');
        if (noTasksMessage) {
            noTasksMessage.style.display = 'none';
        }

        // Move the last checked task to the finished tasks list
        if (lastCheckedTask) {
            moveToFinished(lastCheckedTask);
            lastCheckedTask = null; // Reset the last checked task
        }

        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.className = 'task-list-item';

        // Create a text node for the task description
        const taskText = document.createTextNode(taskInput);

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.onchange = function() {
            lastCheckedTask = listItem; // Store the last checked task
            alert("Please create a new task."); // Alert when checked
        };

        // Append task description and checkbox to list item
        listItem.appendChild(taskText); // Add task description to list item
        listItem.appendChild(checkbox); // Add checkbox to list item
        taskList.appendChild(listItem); // Add list item to the task list

        // Clear input and reset visibility
        document.getElementById('taskInput').value = '';
        document.getElementById('taskInput').style.display = 'none';
        document.getElementById('confirmBtn').style.display = 'none';
        document.querySelector('.create-task-btn').style.display = 'block';
    } else {
        alert("Please enter a task.");
    }
}

// Move task to finished section at the bottom
function moveToFinished(taskItem) {
    const finishedTasksList = document.getElementById('finishedTasksList');
    finishedTasksList.appendChild(taskItem); // Move the task item to finished list
}

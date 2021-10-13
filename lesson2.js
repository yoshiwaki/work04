'use strict';
const taskTrigger = document.getElementById('task-trigger');
const taskValue = document.getElementById('task-value');
const taskTable = document.getElementById('table');
const tasks = [];

const createStatusButton = (task, status) => {
    const statusButton = document.createElement('button');
    statusButton.innerText = task.status;
    status.appendChild(statusButton);
}

const createRemoveButton = remove => {
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    remove.appendChild(removeButton);
    remove.addEventListener('click',()=>{
      // const taskId = taskTable.rows.length;
      // console.log(taskId)
      // const id = taskId.innerText
      // console.log(id)
      taskTable.deleteRow(Object.keys(tasks))
    
      
      tasks.splice(Object.keys(tasks));
      
        showTasks();
      })
}


const showTasks = () => {
  taskTable.innerText = '';
  tasks.forEach((task) => {
    const taskId = taskTable.rows.length;
    
    const row = taskTable.insertRow(-1);

  
    const id = row.insertCell(0);
    const comment = row.insertCell(1);
    const status = row.insertCell(2);
    const remove = row.insertCell(3);
  
    id.innerText = taskId;
    comment.innerText = task.task;
    createStatusButton(task, status);
    createRemoveButton(remove);
    
  })
  
}

taskTrigger.addEventListener('click', () => {
  const task = { task: taskValue.value, status: '作業中' }
  tasks.push(task);
  showTasks();
  taskValue.value = '';

  
  
  
})







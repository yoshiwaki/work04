const button = document.getElementById('button');
button.addEventListener('click',()=>{
  const message = document.getElementById('message');
  const task = {title: message.value,status:'作業中',delete:'削除'};
  const tasks = [];
  tasks.push(task);
  console.log(tasks);

     for (const tas of tasks) {
      const list = document.getElementById('list');
      const lis = document.createElement('li');
       lis.innerHTML = tas;
       list.appendChild(lis);
     }
})
const button = document.getElementById('button');
button.addEventListener('click',()=>{
  const message = document.getElementById('message');
  const list = document.getElementById('list');
  const lis = document.createElement('li');
  const work = document.createElement('button');
  const del = document.createElement('button');
  
  lis.innerHTML = message.value;
  work.innerHTML = "作業中";
  del.innerHTML = "削除";
  list.appendChild(lis);
  lis.appendChild(work);
  lis.appendChild(del);
})
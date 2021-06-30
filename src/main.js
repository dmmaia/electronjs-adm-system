let i = 1
while (i<=15) {
  let li = document.createElement("LI"); 
  li.classList.add('table')
  let tableName = document.createElement("p")
  tableName.innerText = "Conta " + i
  li.appendChild(tableName);
  i++
  document.getElementById('main-content').appendChild(li);
}


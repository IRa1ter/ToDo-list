//const myNodelist = document.getElementsByTagName("li");
//for (let i = 0; i < myNodelist.length; i++) {
//  const span = document.createElement("SPAN");
//  const txt = document.createTextNode("\u00D7");
//  span.className = "close";
//  span.appendChild(txt);
//  myNodelist.appendChild(span);
//}
//
//const close = document.getElementsByClassName("close");
//for (let i = 0; i < close.length; i++) {
//  close.addEventListener('click', function() {
//    const div = this.parentElement;
//    div.style.display = "none";
//  });
//}
//
//const list = document.querySelector('ul');
//list.addEventListener('click', (ev) => {
//  if (ev.target.tagName === 'LI') {
//    ev.target.classList.toggle('checked');
//  }
//});
document.getElementById("addTaskForm").addEventListener("submit",event =>{
const taskText = document.getElementById("taskText").value;

  if (taskText === '') {
    alert("Вы должны что-то написать!");
    event.preventDefault();
  }});
//function validate(event) {
//  const taskText = document.getElementById("taskText").value;
//  if (taskText === '') {
//    alert("Вы должны что-то написать!");
//    event.preventDefault();
//  }

  /* else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("taskText").value = "";
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.addEventListener('click', function() {
    const div = this.parentElement;
    div.style.display = "none";
  });*/
//}
let input = document.querySelector("#input");
let submit = document.querySelector(".submit");
let navList = document.querySelector(".nav-list");

let state = {
  todo: [
    // {item: "Buy milk",id: 1 },
    // {item: "Buy milk",id: 1 },
    // {item: "Buy mlk",id: 1 },
  ]
}
let data = localStorage.getItem("TODO");
if(data){
  state.todo = JSON.parse(data)
  addTodo(state)
}

function addTodo(state){
  const { todo } = state
    todo.forEach(item => {
      let text = `
    <li class="nav-item">${item.item}
    <button class="deleteBtn btn" id=${item.id}>Delete</button>
    </li>
    `
      navList.innerHTML += text;
    })
    
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim().length > 0) {
    navList.innerHTML = null;
    state.todo.push({
      item: input.value,
      id: Math.random()
    })
    localStorage.setItem("TODO", JSON.stringify(state.todo))
    input.value = "";
    addTodo(state);
  } else {
    alert("hi");
  }
});

// if(state.todo.length){
//   let deleteBtn = document.querySelector(".deleteBtn");
//   deleteBtn.addEventListener((e) => {
//     console.log(e.target);
    
//   })
// }
navList.addEventListener('click', (e) => {
  // console.log(e.target.id);
  let newTodo = state.todo.filter((item) => {
    return item.id != e.target.id
  })
  console.log(newTodo);
    navList.innerHTML = null;
    state.todo = newTodo;
  addTodo(state)
  localStorage.setItem("TODO", JSON.stringify(state.todo));
  
})

// let deleteTodo = document.querySelector
// let list;
// let data = localStorage.getItem("TODO");
// if (data) {
//     list = JSON.parse(data)
//     loadList(list)
// } else {
//     list = []
// }

// function loadList(list){
//     list.forEach((item) => {
//         addTodo(item)
//     })
// }

// function addTodo(item){
//     let text = `
//     <li class="nav-item">${item}
//     <button class="delete">Delete</button>
//     </li>
//     `;
//     let position = "beforeend";
//     navList.insertAdjacentHTML(position, text);
// }
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (input.value.trim().length > 0) {
//     list.push(input.value)
//     localStorage.setItem("TODO", JSON.stringify(list))
//     input.value = "";
//   } else {
//     alert("hi");
//   }
// });

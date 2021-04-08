
// 1. Array for the todo list
let todoList = new Array
getTodos ()
// 2. Function that reads localstorage

function getTodos () {
  // If there are items in the storage : 
  if ( localStorage.getItem('todos') ){
    // There are items in the storage
    console.log('there is stuff in the local storage')
    // Save the items into the todoList array
    todoList = JSON.parse( localStorage.getItem('todos') )

    // create the HTML for the items in the todoList array
    popList ()
    return
  } else {
    // There are no items in the storage
    return 'You do not have any todos \nclick the "+" button to add more'
  }
}

// 3. Function that writes in localstorage

function addTodo () {

  // Only add a todo if there is a value in the input
  const newTodo = document.querySelector('#addinput').value
  if ( newTodo ) {
    // Create an object with the input value as text
    const todoObj = {
      text : newTodo,
      complete : false
    }
    // add the todo to the list
    todoList.push(todoObj)
    // overwrite the list in the local storage
    localStorage.setItem('todos', JSON.stringify(todoList))
    // run the populate list function
    popList ()

  } else {
    //display error, field is empty
    return 'You must write something in the box'
  }

}

// 4. Function for populating the todo list

function popList () {
  // Delete the content of the current list
  const list = document.querySelector('#list')
  list.innerHTML = ''

  // Create a new item in the list for every item in the todoList array
  if (todoList) {
    todoList.forEach( todo => {
      const todoWrapper = document.createElement('div')
      todoWrapper.classList.add('todoWrapper')
      todoWrapper.innerHTML = `
      <div class="todoText">${todo.text}</div>
      <div class="todoCheck ${todo.complete == false ? 'false' : ''}"></div> 
      `
      list.appendChild(todoWrapper)

      return
    })
  }

  updateBoxes ()
}


// 6. Update Boxes

function updateBoxes () {
  let boxes = document.querySelectorAll('.todoCheck')

  boxes.forEach( (box, i) => {
    box.addEventListener('click', e => {
      box.classList.toggle('false')

      if (box.classList.contains('false')) {
        // Change array to represent new information
        todoList[i].complete = false
      } else {
        todoList[i].complete = true
      }

      //console.log(todoList)
      localStorage.setItem('todos', JSON.stringify(todoList))
    })
  })
}


// 5. Click Event for adding item

document.querySelector('#addButton').addEventListener('click',  e => {
  e.preventDefault()
  addTodo ()
  // Reset input value
  document.querySelector('input').value = ''
})


// Clear completed items
document.querySelector('#clearCompleted').addEventListener('click', e => {
  e.preventDefault()

  todoList = todoList.filter( todo => todo.complete == false)
  // update local storage
  localStorage.setItem('todos', JSON.stringify(todoList))
  popList()
})

// Mark all as complete
document.querySelector('#markAllCompleted').addEventListener('click', e => {
  e.preventDefault()

  const boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach( (box, i) => {
    // Change the HTML classes 
    box.classList.remove('false')
    // Alter the array
    todoList[i].complete = true
    // update local storage
    localStorage.setItem('todos', JSON.stringify(todoList))
  })
})


// Reset input after submit
// Linethrough completed texts


// Undo function 

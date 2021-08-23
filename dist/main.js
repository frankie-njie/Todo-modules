/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project{
constructor(id, name, description) {
    this.id = id
    this.name = name;
    this.description  = description
    this.allTasks = [];
    this.active
}
addTask(task){
    this.allTasks.push(task)
}
deleteTask(taskId){
  this.allTasks = this.allTasks.filter((task) => task.id !== taskId)
    // this.allTasks.splice(taskId, 1)
} 
setTaskId(){
    return this.allTasks.length
}
getAllTasks(){
    return this.allTasks
}
getId(){
    return this.id
}

getTitle(){
    return this.name
}
}
 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/ToDoItem.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// function ToDoItem() {
//     console.log("A todo item has been created");
// }

class ToDoItem {
    constructor(id, title, description, dueDate, priority, notes) {
        this.id = id;
        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        // this.notes = notes
    }
    // getId(){
    //     return this.id
    // }

   toDoTitle (){
        return this.title
    }
    toDoDescription(){
        return this.description;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ToDoItem */ "./src/modules/ToDoItem.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");


console.log("hello world!");

// const myTasks = [];
const myProjects = [];

const allTodoitems = document.getElementById("taskDiv");
const addTaskBtn = document.getElementById("addTask");
const projectDiv = document.getElementById("projectList");

const addProjectsBtn = document.getElementById("addProject");

//button event listeners
addTaskBtn.addEventListener("click", createTaskForm);
addProjectsBtn.addEventListener("click", createProjectForm);

//project form
function createProjectForm() {
  let projectFormDiv = document.getElementById("projectForm");
  projectFormDiv.innerHTML = `
        <label for="projectNme">Project Name</label>
        <input id="projectNme" type="text">
        <label for="">Project Description</label>
        <input id="projectDesc" type="text">
        <button id="createProject" class="button">create project</button>
        <button id="cancelProject">cancel</button>
    `;
  let projectDelBtn = document.getElementById("cancelProject");
  projectDelBtn.onclick = () => {
    cancelProject();
  };

  let projectCreateBtn = document.getElementById("createProject");

  projectCreateBtn.onclick = createProject;
}


function createProject(projName, projDescription) {
  let projId = myProjects.length;
  projName = document.getElementById("projectNme").value;
  projDescription = document.getElementById("projectDesc").value;
  let projectState;

  if (!projName) {
    alert("Enter a project name");
  } else {
    let newProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__.default(
      projId,
      projName,
      projDescription,
      projectState
    );
    myProjects.push(newProject);
    displayProject();
    cancelProject()
    newProject.active = true;
    for (let i = 0; i < myProjects.length - 1; i++) {
      myProjects[i].active = false;
    }
    displayProjectTask();
    console.log(myProjects);
  }

}

// function getActiveProject() {
//     return myProjects.find((project)=>{
//         return project.active
//     })
// }

function displayProject() {
  projectDiv.innerHTML = "";
  myProjects.forEach((project, i) => {
    
    projectDiv.innerHTML += `
        <div class="singleProjDiv">
            <span class="projectName">${project.name}</span>
            <button class="projectDelItem">delete</button>
        </div>
        `;
  });

  let removeProject = document.querySelectorAll(".projectDelItem");
  removeProject.forEach((button, index) => {
    button.addEventListener("click", () => deleteProject(index));
  });

  let projectItem = document.querySelectorAll(".projectName");

  projectItem.forEach((item,id) =>
    item.addEventListener("click", (e) => {
        let currentProject = myProjects[id]
        console.log(currentProject);
        currentProject.active = true;
        for (let i = 0; i < myProjects.length; i++) {
            if (i !== id) {
                myProjects[i].active = false;
            }
        }
        cancelTask()
        displayProjectTask();
        console.log(myProjects);
    })
  );
}

function displayProjectTask() {
  let activeProject = getActiveProject();
  let currentProject = activeProject.getAllTasks();
  let taskDiv = document.getElementById("taskDiv");
  let taskHead = document.getElementById("main-content").firstElementChild;
  let taskDesc = document.getElementById('project-desc')
  taskDiv.innerHTML = "";

  taskHead.innerHTML = activeProject.name;
  taskDesc.innerHTML = activeProject.description
  

  let singleTask = "";
  currentProject.forEach((projectTask) => {
    let taskid = projectTask.id;

    singleTask += `<div id="singleTask" class="single-task">
            <p>${projectTask.title}</p>
            <p>${projectTask.description}</p>
            <span>${projectTask.dueDate}</span>
            <button class="edit-task">edit task</button>
            <button data-task=${taskid} class="delete-task">delete task </button>
        </div>
        `;
  });

  taskDiv.innerHTML = "";
  taskDiv.innerHTML += singleTask;

  let deleteTaskBtn = document.querySelectorAll(".delete-task");
  deleteTaskBtn.forEach((element) => {
  
    element.addEventListener("click", removeTask);
  });
}

function deleteProject(projId) {
  myProjects.splice(projId, 1);
  displayProject();
  console.log(myProjects);
}

function cancelProject() {
   let div = document.getElementById("projectForm")
   div.innerHTML = "";
}




//task form
function createTaskForm(e) {
  const todoForm = document.getElementById("taskForm");

  todoForm.innerHTML = `
        <input id="todoTitle" type="text">
        <input id="description" type="text">
        <input id="date" type="date">
        <button id="createTaskBtn">add Task</button>
        <button id="cancelTaskBtn">cancel</button>
    `;

  let createTaskBtn = document.getElementById("createTaskBtn");
  let cancelBtn = document.getElementById("cancelTaskBtn");

  createTaskBtn.addEventListener("click", createTask);
  cancelBtn.addEventListener("click", cancelTask);
}

function cancelTask() {
//   console.log(e.target);
  const todoForm = document.getElementById("taskForm");
  todoForm.innerHTML = "";
}


function createTask(taskTitle, taskDescription, taskDueDate, taskPriority) {
  let activeProject = getActiveProject()

  let taskId = activeProject.setTaskId();
//   console.log(taskId);
  taskTitle = document.getElementById("todoTitle").value;
  taskDescription = document.getElementById("description").value;
  taskDueDate = document.getElementById("date").value;

  if (!taskTitle) {
    alert("You must enter a task Title for this to be valid");
  } else {
    let newTask = new _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__.default(taskId, taskTitle, taskDescription, taskDueDate);
    activeProject.addTask(newTask);
    displayProjectTask();

    // console.log("called from by displayed func", newTask);
  }
}

function getActiveProject() {
  return myProjects.find((project) => {
    return project.active;
  });
}


function removeTask(event) {
  console.log(event.target);
  let taskId = event.target.dataset.task;
  console.log(taskId);

  let activeProject = getActiveProject()
  activeProject.deleteTask(parseInt(taskId));
  displayProjectTask();
  console.log(myProjects);
}

// show all task in a project
// when a project is removed, all the tasks should also be removed

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7O1VDekJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIscURBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkMsaUJBQWlCLHdCQUF3QjtBQUN6QyxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixzREFBUTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdHtcbmNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiAgPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuYWxsVGFza3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZVxufVxuYWRkVGFzayh0YXNrKXtcbiAgICB0aGlzLmFsbFRhc2tzLnB1c2godGFzaylcbn1cbmRlbGV0ZVRhc2sodGFza0lkKXtcbiAgdGhpcy5hbGxUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpXG4gICAgLy8gdGhpcy5hbGxUYXNrcy5zcGxpY2UodGFza0lkLCAxKVxufSBcbnNldFRhc2tJZCgpe1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzLmxlbmd0aFxufVxuZ2V0QWxsVGFza3MoKXtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrc1xufVxuZ2V0SWQoKXtcbiAgICByZXR1cm4gdGhpcy5pZFxufVxuXG5nZXRUaXRsZSgpe1xuICAgIHJldHVybiB0aGlzLm5hbWVcbn1cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiLy8gZnVuY3Rpb24gVG9Eb0l0ZW0oKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJBIHRvZG8gaXRlbSBoYXMgYmVlbiBjcmVhdGVkXCIpO1xuLy8gfVxuXG5jbGFzcyBUb0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIC8vIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgIH1cbiAgICAvLyBnZXRJZCgpe1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5pZFxuICAgIC8vIH1cblxuICAgdG9Eb1RpdGxlICgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbiAgICB0b0RvRGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi9tb2R1bGVzL1RvRG9JdGVtXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL1Byb2plY3RcIjtcbmNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpO1xuXG4vLyBjb25zdCBteVRhc2tzID0gW107XG5jb25zdCBteVByb2plY3RzID0gW107XG5cbmNvbnN0IGFsbFRvZG9pdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RpdlwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tcIik7XG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKTtcblxuY29uc3QgYWRkUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5cbi8vYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFza0Zvcm0pO1xuYWRkUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3RGb3JtKTtcblxuLy9wcm9qZWN0IGZvcm1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICBsZXQgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0Rm9ybURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0Tm1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdE5tZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9qZWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdERlc2NcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwiYnV0dG9uXCI+Y3JlYXRlIHByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFByb2plY3RcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICBgO1xuICBsZXQgcHJvamVjdERlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsUHJvamVjdFwiKTtcbiAgcHJvamVjdERlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNhbmNlbFByb2plY3QoKTtcbiAgfTtcblxuICBsZXQgcHJvamVjdENyZWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdFwiKTtcblxuICBwcm9qZWN0Q3JlYXRlQnRuLm9uY2xpY2sgPSBjcmVhdGVQcm9qZWN0O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvak5hbWUsIHByb2pEZXNjcmlwdGlvbikge1xuICBsZXQgcHJvaklkID0gbXlQcm9qZWN0cy5sZW5ndGg7XG4gIHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Tm1lXCIpLnZhbHVlO1xuICBwcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REZXNjXCIpLnZhbHVlO1xuICBsZXQgcHJvamVjdFN0YXRlO1xuXG4gIGlmICghcHJvak5hbWUpIHtcbiAgICBhbGVydChcIkVudGVyIGEgcHJvamVjdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBwcm9qSWQsXG4gICAgICBwcm9qTmFtZSxcbiAgICAgIHByb2pEZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RTdGF0ZVxuICAgICk7XG4gICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgY2FuY2VsUHJvamVjdCgpXG4gICAgbmV3UHJvamVjdC5hY3RpdmUgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIG15UHJvamVjdHNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICAgIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xuICB9XG5cbn1cblxuLy8gZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbi8vICAgICByZXR1cm4gbXlQcm9qZWN0cy5maW5kKChwcm9qZWN0KT0+e1xuLy8gICAgICAgICByZXR1cm4gcHJvamVjdC5hY3RpdmVcbi8vICAgICB9KVxuLy8gfVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpIHtcbiAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcbiAgICBcbiAgICBwcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQcm9qRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3ROYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3REZWxJdGVtXCI+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9KTtcblxuICBsZXQgcmVtb3ZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERlbEl0ZW1cIik7XG4gIHJlbW92ZVByb2plY3QuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChpbmRleCkpO1xuICB9KTtcblxuICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3ROYW1lXCIpO1xuXG4gIHByb2plY3RJdGVtLmZvckVhY2goKGl0ZW0saWQpID0+XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbXlQcm9qZWN0c1tpZF1cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSBpZCkge1xuICAgICAgICAgICAgICAgIG15UHJvamVjdHNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsVGFzaygpXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRhc2soKSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGl2XCIpO1xuICBsZXQgdGFza0hlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzYycpXG4gIHRhc2tEaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0YXNrSGVhZC5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0Lm5hbWU7XG4gIHRhc2tEZXNjLmlubmVySFRNTCA9IGFjdGl2ZVByb2plY3QuZGVzY3JpcHRpb25cbiAgXG5cbiAgbGV0IHNpbmdsZVRhc2sgPSBcIlwiO1xuICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0VGFzaykgPT4ge1xuICAgIGxldCB0YXNraWQgPSBwcm9qZWN0VGFzay5pZDtcblxuICAgIHNpbmdsZVRhc2sgKz0gYDxkaXYgaWQ9XCJzaW5nbGVUYXNrXCIgY2xhc3M9XCJzaW5nbGUtdGFza1wiPlxuICAgICAgICAgICAgPHA+JHtwcm9qZWN0VGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICA8cD4ke3Byb2plY3RUYXNrLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxzcGFuPiR7cHJvamVjdFRhc2suZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC10YXNrXCI+ZWRpdCB0YXNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFzaz0ke3Rhc2tpZH0gY2xhc3M9XCJkZWxldGUtdGFza1wiPmRlbGV0ZSB0YXNrIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgdGFza0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrRGl2LmlubmVySFRNTCArPSBzaW5nbGVUYXNrO1xuXG4gIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGFza1wiKTtcbiAgZGVsZXRlVGFza0J0bi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIFxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qSWQpIHtcbiAgbXlQcm9qZWN0cy5zcGxpY2UocHJvaklkLCAxKTtcbiAgZGlzcGxheVByb2plY3QoKTtcbiAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3QoKSB7XG4gICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKVxuICAgZGl2LmlubmVySFRNTCA9IFwiXCI7XG59XG5cblxuXG5cbi8vdGFzayBmb3JtXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybShlKSB7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcblxuICB0b2RvRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCBpZD1cInRvZG9UaXRsZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxpbnB1dCBpZD1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVUYXNrQnRuXCI+YWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFRhc2tCdG5cIj5jYW5jZWw8L2J1dHRvbj5cbiAgICBgO1xuXG4gIGxldCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrQnRuXCIpO1xuICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxUYXNrQnRuXCIpO1xuXG4gIGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2spO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2spO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCkge1xuLy8gICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgdG9kb0Zvcm0uaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpXG5cbiAgbGV0IHRhc2tJZCA9IGFjdGl2ZVByb2plY3Quc2V0VGFza0lkKCk7XG4vLyAgIGNvbnNvbGUubG9nKHRhc2tJZCk7XG4gIHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1RpdGxlXCIpLnZhbHVlO1xuICB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcblxuICBpZiAoIXRhc2tUaXRsZSkge1xuICAgIGFsZXJ0KFwiWW91IG11c3QgZW50ZXIgYSB0YXNrIFRpdGxlIGZvciB0aGlzIHRvIGJlIHZhbGlkXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRvRG9JdGVtKHRhc2tJZCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlKTtcbiAgICBhY3RpdmVQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgZGlzcGxheVByb2plY3RUYXNrKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNhbGxlZCBmcm9tIGJ5IGRpc3BsYXllZCBmdW5jXCIsIG5ld1Rhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gIHJldHVybiBteVByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdC5hY3RpdmU7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgbGV0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2s7XG4gIGNvbnNvbGUubG9nKHRhc2tJZCk7XG5cbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KClcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrKHBhcnNlSW50KHRhc2tJZCkpO1xuICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG59XG5cbi8vIHNob3cgYWxsIHRhc2sgaW4gYSBwcm9qZWN0XG4vLyB3aGVuIGEgcHJvamVjdCBpcyByZW1vdmVkLCBhbGwgdGhlIHRhc2tzIHNob3VsZCBhbHNvIGJlIHJlbW92ZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
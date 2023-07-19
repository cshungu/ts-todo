/**
 * @description      : Todo simple
 * @author           : christian shungu <christianshungu@gmail.com>
 * @group            : 
 * @created          : 07/10/2021 - 21:07:52
 * @version          : 1.0.0
 * 
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/10/2021
 * - Author          : christian
 * - Modification    : 
**/
import "./sass/app.scss";

const app: HTMLDivElement | any = document.querySelector('.app-todos');
const todoForm: HTMLFormElement | any = app.querySelector('form');
const todoList: HTMLUListElement | any = app.querySelector('.todolist');
const todoInput: HTMLInputElement | any = app.querySelector('form > input');
const todoTasks: HTMLDivElement | any = app.querySelector('.todotasks');

interface todoInterface {
    titre: string,
    done: boolean,
    editMode?: boolean
}
let todos: Array<todoInterface> = [
    {
        titre: 'Faire du React',
        done: false,
        editMode: false
    },
    {
        titre: 'Faire du Javascript',
        done: true,
        editMode: false
    }
];
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = todoInput.value;
    todoInput.value = '';
    addTodo(value);
    
});
const displayTodo: Function = () => {
    const nodes: Array<HTMLLIElement> = todos.map((todo, index) => {
        if (todo.editMode) {
            return createEditTodo(todo, index);
        } else {
            return createTodo(todo, index);
        }
    });
    todoList.innerHTML= "";
    todoList.append(...nodes);
    if (todos.length > 0) {
        createTask();
    }
}
const createTodo: Function = (todo:todoInterface, index:number) => { 
    const li: HTMLLIElement = document.createElement('li');
    const divLeft: HTMLDivElement = document.createElement('div');
    divLeft.setAttribute("class", "item--left");
    const inputCheck: HTMLInputElement = document.createElement('input');
    inputCheck.type = "checkbox";
    inputCheck.name = "check";
    inputCheck.setAttribute("class", "todo");
    inputCheck.checked = todo.done;
    inputCheck.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTodo(index);
    });

    const labelCheck:HTMLLabelElement = document.createElement('label');
    labelCheck.innerText = todo.titre;
    divLeft.append(inputCheck, labelCheck);

    const divRight: HTMLDivElement = document.createElement('div');
    divRight.setAttribute("class", "item--right");

    const btnEdit:HTMLButtonElement = document.createElement('button');
    btnEdit.setAttribute("class", `fas fa-pen ${todo.done ? 'done' : ''}`);
    btnEdit.setAttribute("title", "Edit");
    btnEdit.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleEditMode(index);
    });

    const btnDelete:HTMLButtonElement = document.createElement('button');
    btnDelete.setAttribute("class", `fas fa-trash ${todo.done ? 'done' : ''}`);
    btnDelete.setAttribute("title", "Supprimer");
    btnDelete.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTodo(index);
    });

    if (todo.done) {
        btnEdit.setAttribute("disabled", `${todo.done ? "disabled" : ""}`);
        btnDelete.setAttribute("disabled", `${todo.done ? "disabled" : ""}`);
    }
    divRight.append(btnEdit, btnDelete);
    li.append(divLeft, divRight);

    return li; 
}
const createEditTodo: Function = (todo:todoInterface, index:number) => {
    const li: HTMLLIElement = document.createElement('li');
    const divLeft:HTMLDivElement = document.createElement('div');
    divLeft.setAttribute("class", "item--left");
    const input:HTMLInputElement = document.createElement('input');
    input.type = "text";
    input.value = todo.titre;
    divLeft.append(input);

    const divRight:HTMLDivElement = document.createElement('div');
    divRight.setAttribute("class", "item--right");

    const bntSave:HTMLButtonElement = document.createElement('button');
    bntSave.setAttribute("class", `fas fa-save ${todo.done ? 'done' : ''}`);
    bntSave.setAttribute("title", "Sauvegarder");
    bntSave.addEventListener('click', (e) => {
        e.stopPropagation();
        editTodo(index, input);
    });

    const bntCancel:HTMLButtonElement = document.createElement('button');
    bntCancel.setAttribute("class", `fas fa-times ${todo.done ? 'done' : ''}`); 
    bntCancel.setAttribute("title", "Annuler");
    bntCancel.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleEditMode(index);
    });
    divRight.append(bntSave, bntCancel);
    li.append(divLeft, divRight);

    return li; 
} 
const addTodo: Function = (titre: string) => {
    if (titre) {
        todos.push({titre, done: false});
    }
    displayTodo();
}
const deleteTodo: Function  = (index: number) => {
    todos.splice(index, 1);
    displayTodo();
};
const toggleTodo: Function = (index: number) => { 
    todos[index].done = !todos[index].done;
    displayTodo();
}
const toggleEditMode: Function  = (index: number) => {
    todos[index].editMode = !todos[index].editMode;
    displayTodo();
};
const editTodo: Function = (index: number , input:HTMLInputElement) => {
    const value = input.value;
    todos[index].titre= value;
    todos[index].editMode = false;
    displayTodo();
};
const createTask: Function = () => {
    let total:number = todos.length;
    let num:number = todos.filter(todo => todo.done === true).length;

    let tasksLeft:HTMLDivElement = document.createElement("div");
    tasksLeft.setAttribute("class", "tasks--left");
    let span:HTMLSpanElement = document.createElement("span");
    span.innerText = `${num} de(s) ${total} tâches effectuée(s)`;
    tasksLeft.append(span);

    let tasksRight:HTMLDivElement = document.createElement("div");
    tasksRight.setAttribute("class", "tasks--right");

    let btn:HTMLButtonElement = document.createElement("button");
    btn.innerText = "Supprimer de tâches cochées";
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeTasks()
    });
    tasksRight.append(btn);
    todoTasks.innerHTML = "";
    todoTasks.append(tasksLeft, tasksRight);
}
const removeTasks: Function = () => {
    todos = todos.filter(todo => todo.done === false);
    displayTodo();
} 
displayTodo(); 
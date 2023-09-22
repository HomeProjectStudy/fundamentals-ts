"use strict";
const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
let taskStorage = localStorage.getItem('@tasks');
let tasks = taskStorage !== null && JSON.parse(taskStorage) || [];
function handleAddTask() {
    if (inputElement.value === '') {
        alert('Digite alguma tarefação');
        return false;
    }
    let task = inputElement.value;
    tasks.push(task);
    inputElement.value = '';
    setAsyncStorage();
    console.log(tasks);
}
getTasks();
function handleDeleteTask(index) {
    tasks.splice(index, 1);
    getTasks();
    setAsyncStorage();
}
function getTasks() {
    listElement.innerHTML = '';
    tasks.map((item) => {
        let listTasks = document.createElement('li');
        let textTasks = document.createTextNode(item);
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let index = tasks.indexOf(item);
        linkElement.setAttribute('onclick', `handleDeleteTask(${index})`);
        let linkText = document.createTextNode('excluir');
        linkElement.appendChild(linkText);
        listTasks.appendChild(textTasks);
        listTasks.appendChild(linkElement);
        listElement.appendChild(listTasks);
    });
}
buttonElement.addEventListener('click', handleAddTask);
function setAsyncStorage() {
    localStorage.setItem('@tasks', JSON.stringify(tasks));
}

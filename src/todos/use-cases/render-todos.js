import { Todo } from '../models/todo.model'
import { createTodoHTML } from './';

let element;

/**
 * 
 * @param {String} elemenId 
 * @param {Todo} todo 
 */
export const renderTodos = ( elemenId, todos = []) => {

    if(!element)
        element = document.querySelector( elemenId );

    if( !element) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    })

}
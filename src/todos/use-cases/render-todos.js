import { Todo } from '../models/todo.model'
import { createTodoHTML } from './';

/**
 * 
 * @param {String} elemenId 
 * @param {Todo} todo 
 */
export const renderTodos = ( elemenId, todos = []) => {

    //Todo: referencia
    const element = document.querySelector( elemenId );

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    })

}
import React from 'react';
import './TodoListTemplate.css';
import Palette from './Palette';

const TodoListTemplate = ({form, palette, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                할일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;


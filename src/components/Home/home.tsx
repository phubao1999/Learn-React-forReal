import NewTodo from "../NewToDo/newTodo"
import { nanoid } from "nanoid";
import { useState } from "react";
import Item from "../../interface/common.interface";
import TodoItem from "../TodoItem/todoItem";

export default function Home(props: any) {
    const defaultTasks: Item[] = [];
    const [items, setItems] = useState(defaultTasks);

    const addItem = (item: any) => {
        const newItem: Item = {
            id: `todo_id-${nanoid()}`,
            name: item.item,
            isDone: false,
            description: item.description
        };
        setItems([...items, newItem]);
    }

    return <>
        <NewTodo addItem={addItem}></NewTodo>
        {items.map((item, index) => {
            return <TodoItem key={index} id={item.id} name={item.name} isDone={item.isDone} description={item.description}></TodoItem>
        })}
    </>
}
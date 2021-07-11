import NewTodo from "../NewToDo/newTodo"
import { nanoid } from "nanoid";
import { useState } from "react";
import Item from "../../interface/common.interface";

export default function Home(props: any) {
    const defaultTasks: Item[] = [];
    const [items, setItems] = useState(defaultTasks);

    function addItem(item: string) {
        const newItem: Item = {
            id: `todo_id-${nanoid()}`,
            name: item,
            isDone: false
        };
        setItems([...items, newItem]);
        console.log(items);
    }

    return <>
        <NewTodo addItem={addItem}></NewTodo>
    </>
}
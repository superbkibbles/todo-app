import { useEffect, useState } from 'react';

import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import AppList from '../components/AppList';
import arrayMove from 'array-move';

import './todoListScreen.css';

const TodoListScreen = () => {
    const [inputValue, setInputValue] = useState('')
    const [items, setItems] = useState([]);


    const handleChange = (e) => {
       setInputValue(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        if (inputValue) saveItem();
    }

    const saveItem = () => {
        setItems((prevState) => [...prevState, inputValue]);
        setInputValue('');
    }

    const deleteHandler = (i) => {
        setItems((prevState) => prevState.filter((item, id) => id !== i));

    }

    const onUpClick = (i) => {
        const to = i - 1;
        
        setItems(arrayMove(items, i, to));

    }

    const onDownClick = (i) => {
        const to = i + 1;
        if (i === items.length - 1) return setItems(arrayMove(items, i, 0));

        setItems(arrayMove(items, i, to));
    }

    return (
        <div className='container'>
            <h1>TODO APP</h1>
            <form className='form' onSubmit={clickHandler}>
                <AppInput type="text" onChange={handleChange} value={inputValue} />
                <AppButton onClick={clickHandler} />
            </form>

            <div className='content'>
                <AppList 
                    onUpClick={onUpClick}
                    onClickDelete={deleteHandler}
                    items={items}
                    onDownClick={onDownClick}
                />
            </div>
        </div>
    )
}

export default TodoListScreen;
import { useEffect } from 'react';
import AppItem from '../AppItem';
import './appList.css';

const AppLlist = ({items, onClickDelete, onUpClick, onDownClick}) => {
    return (
        <ul className='items-list'>
            {
                items.map((item, i) => (
                    <AppItem 
                        onUpClick={onUpClick}
                        onClickDelete={onClickDelete}
                        onDownClick={onDownClick}
                        key={i}
                        item={item}
                        i={i}
                    />
                ))
            }
        </ul>
        
    )
}

export default AppLlist
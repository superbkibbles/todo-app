import AppButton from '../AppButton';
import './appItem.css';

const AppItem = ({item, onClickDelete, i, onUpClick, onDownClick}) => {
    return (
        <li className='item-neon'>
            <span>{item.split("").length > 30? item.split("").slice(0, 30).join("") + "...": item}</span>
            <div className='button-container'>
                <AppButton onClick={() => onClickDelete(i)} title='Delete' />
                <AppButton title='Up' onClick={() => onUpClick(i)} />
                <AppButton title='Down' onClick={() => onDownClick(i)} />
            </div>
        </li>
    )
}

export default AppItem
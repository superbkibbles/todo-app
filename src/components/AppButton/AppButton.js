import './appButton.css';

const AppButton = ({onClick, title='Add'}) => {
    return (
        <a className='btn__neon' onClick={onClick}>
            {title}
        </a>
    )
}

export default AppButton;
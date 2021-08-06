import './appInput.css'

const AppInput = ({...props}) => {
    return (
        <div className='input-neon'>
            <input {...props} className='input-neon__input' />
        </div>
    )
}

export default AppInput;
import React from 'react';

const Form = ({onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type='text' id="name" placeholder='Введите Имя' onChange={onChange}/>
            <br/>
            <input type='text' id="lastname" placeholder='Введите Отчество' onChange={onChange}/>
            <br/>
            {/* <input type='email' placeholder='Email'/> */}
            {/* <br/> */}
            <input type='password' id="password" placeholder='Введите Пароль' onChange={onChange}/>
            <br/>
            <button className='button_success'>Зарегистрироваться</button>
        </form>
    );
}

export default Form
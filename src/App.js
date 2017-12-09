import React, {Component} from 'react';
import './App.css';
import Form from './componets/Form';
import UsersList from './componets/Userslist';

class App extends Component {
    state = {
        login: true,
        users: [],
        name: '',
        lastname: '',
        password: '',
        counter:0,

    }

    handleSubmit = event => {
        const {name, lastname, password} = this.state
        event.preventDefault();
        if (name.length <=0 || lastname.length<=0 || password.length<=0){
            alert('Заполните поле Имя и Отечество и Пароль')
        }else {
            this.setState({login: false})
            this.state.users.push({
                'name': name,
                'lastname': lastname,
                'password': password,
                'id': this.state.counter++
            })
        }
    }

    handleChange = () => {
        const name = document.getElementById('name').value
        const lastname = document.getElementById('lastname').value
        const password = document.getElementById('password').value
        this.setState({
            name: name,
            lastname: lastname,
            password: password
        })
    }

    render() {
        const {login, users} = this.state
        return (
            <div className="App">
                {login ? <Form
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                /> : <UsersList users={users}/>}
            </div>
        );
    }
}

export default App;

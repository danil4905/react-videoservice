import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        background: 'rgba(51, 51, 51, 0.6)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem('userName'), // Имя пользователя
            editMode: false, // Режим редактирования имени
            isAuth: localStorage.getItem('isAuth'),// Зашёл ли пользоваель в аккаунт
            modalIsOpen: false,// Отображение модального окна входа
        };
    }
    onNameCgange = (name) => {
        this.setState({ userName: name.target.value });
    }
    Login = () => {
        this.setState({ isAuth: true });
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('userName', this.state.userName);
    }
    LogOut = () => {
        this.setState({ isAuth: false, modalIsOpen: false });
        localStorage.setItem('isAuth', 'false');
        localStorage.clear();
    }
    openEditMode = () => {
        this.setState({ editMode: true });
        localStorage.setItem('userName', this.state.userName);
    }
    closeEditMode = () => {
        this.setState({ editMode: false });
        localStorage.setItem('userName', this.state.userName);
    }
    openModal = () => {
        this.setState({ modalIsOpen: true });
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }
    render() {
        if (this.state.isAuth) {
            if (this.state.editMode) {
                return (<div><input value={this.state.userName} onChange={this.onNameCgange} onBlur={this.closeEditMode} placeholder="Логин" className="user-name" autoFocus /><button className="search-btn btn" onClick={this.LogOut}>Выйти</button> </div>)
            }
            else {
                return (<div><span onClick={this.openEditMode}>{this.state.userName}</span> <button className="search-btn btn" onClick={this.LogOut}>Выйти</button></div>)
            }
        }
        else
            return (
                <div>
                    <button className="login-btn btn" onClick={this.openModal}>Войти</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Login Modal">
                        <div className="modal-window">
                            <h2>Вход</h2>
                            <form onSubmit={this.Login}>
                                <input type="text" placeholder="Логин" required value={this.state.userName} onChange={this.onNameCgange} /><br />
                                <input type="password" placeholder="Пароль" required /><br />
                                <input type="checkbox" />Запомнить<br />
                                <button className="login-btn btn" type="submit">Войти</button>
                            </form>
                        </div>
                    </Modal>
                </div>
            )
    }
}
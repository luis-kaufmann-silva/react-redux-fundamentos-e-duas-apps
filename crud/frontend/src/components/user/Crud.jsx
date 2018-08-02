import React from 'react';
import axios from 'axios';
import Main from '../template/Main';

const headerProps = {
    icom: 'users',
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, alterar, destruir e pesquisar"
}
const BASE_URL = 'http://localhost:3001/users';

const INITIAL_STATE = {
    user: { name: '', email: ''},
    list: []
}

export default class Crud extends React.Component {

    state = {...INITIAL_STATE}
    componentWillMount(){
        axios(BASE_URL)
            .then(resp => this.setState({list: resp.data}))
    }
    clear(){
        this.setState({user: INITIAL_STATE.user})
    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id);
        if (user) list.unshift(user);
        return list;
    }
    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({user: INITIAL_STATE.user, list});
            })
    }

    updateField(event) {
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({ user })
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="id_nome">Nome:</label>
                            <input 
                                type="text" 
                                name='name' 
                                placeholder="Digite o nome"
                                onChange={e => this.updateField(e)} 
                                className="form-control" 
                                value={this.state.user.name}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="id_email">Email:</label>
                            <input
                                id="id_email"
                                type="email"
                                name='email'
                                placeholder="email@host.com"
                                onChange={e => this.updateField(e)}
                                className="form-control"
                                value={this.state.user.email}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
                
            </div>
            
        )
    }

    load(user){
        this.setState({user: user});
    }

    remove(user){
        axios.delete(`${BASE_URL}/${user.id}`)
            .then(resp => {
                this.setState({ list: this.state.list.filter(u => u.id !== user.id)})
            })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={e => this.load(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={e => this.remove(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuários
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
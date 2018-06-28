import React from 'react';
import PageHeader from 'components/pageheader';
import Form from 'root/todo/form';
import List from 'root/todo/list';

export default props => (
    <div>
        <PageHeader name='Todo' small='Cadastro'/>
        <Form />
        <List />
    </div>
)
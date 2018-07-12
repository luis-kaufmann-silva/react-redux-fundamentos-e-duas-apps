import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
    getList,
    showUpdate,
    showDelete,
    remove
} from 'root/billingcycle/actions';

class BillingCycleList extends React.Component {
    componentWillMount() {
        this.props.getList();
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map(item => {
                        return (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.month}</td>
                                <td>{item.year}</td>
                                <td className="table-actions">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() =>
                                            this.props.showUpdate(item)
                                        }
                                    >
                                        <i className="fa fa-pencil" />
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            this.props.showDelete(item)
                                        }
                                    >
                                        <i className="fa fa-trash-o" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycleList);

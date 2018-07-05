import React from 'react';
import Grid from 'common/layout/grid';
import { Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import InlienField from 'components/inlinefield';
import { arrayInsert, arrayRemove } from 'redux-form';
import { connect } from 'react-redux';
import If from 'common/if';
class ItemList extends React.Component {
    remove(index) {
        const { arrayRemove } = this.props;
        if (!this.props.readOnly && this.props.list.length > 1) {
            arrayRemove('billing-cycle-form', this.props.field, index);
        }
    }

    add(index, item = {}) {
        const { arrayInsert } = this.props;
        if (!this.props.readOnly) {
            arrayInsert('billing-cycle-form', this.props.field, index, item);
            console.log(index, item);
        }
    }
    render() {
        const list = this.props.list || [];
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={item._id || index}>
                                    <td>
                                        <Field
                                            name={`${
                                                this.props.field
                                            }[${index}].name`}
                                            component={InlienField}
                                            placeholder="Nome"
                                            readOnly={this.props.readOnly}
                                        />
                                    </td>
                                    <td>
                                        <Field
                                            name={`${
                                                this.props.field
                                            }[${index}].value`}
                                            component={InlienField}
                                            placeholder="Valor"
                                            readOnly={this.props.readOnly}
                                        />
                                    </td>
                                    <If test={this.props.showStatus}>
                                        <td>
                                            <Field
                                                name={`${
                                                    this.props.field
                                                }[${index}].status`}
                                                component={InlienField}
                                                placeholder="Status"
                                                readOnly={this.props.readOnly}
                                            />
                                        </td>
                                    </If>
                                    <td className="table-actions">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={e => this.add(index + 1)}
                                        >
                                            <i className="fa fa-plus" />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={e =>
                                                this.add(index + 1, item)
                                            }
                                        >
                                            <i className="fa fa-clone" />
                                        </button>
                                        <If test={this.props.list.length > 1}>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={e =>
                                                    this.remove(index)
                                                }
                                            >
                                                <i className="fa fa-trash-o" />
                                            </button>
                                        </If>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(
    null,
    mapDispatchToProps
)(ItemList);

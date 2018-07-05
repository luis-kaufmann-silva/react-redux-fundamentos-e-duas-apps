import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import LabelField from 'root/components/labelfield';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { init } from 'root/billingcycle/actions';
import ItemList from 'components/itemlist';
import Row from 'common/layout/row';

import Summary from 'root/billingcycle/summary';

class BillingCycleForm extends React.Component {
    calculateSummary() {
        const sum = (t, v) => t + v;
        return {
            credit: this.props.credits.map(c => +c.value || 0).reduce(sum),
            debit: this.props.debits.map(c => +c.value || 0).reduce(sum)
        };
    }

    render() {
        const { handleSubmit, readOnly, credits, debits } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelField}
                        label="Nome"
                        readOnly={readOnly}
                        cols="12 4"
                        placeholder="Informe o nome"
                    />
                    <Field
                        name="month"
                        component={LabelField}
                        label="Mês"
                        cols="12 4"
                        readOnly={readOnly}
                        placeholder="Informe o mês"
                    />
                    <Field
                        name="year"
                        component={LabelField}
                        label="Ano"
                        cols="12 4"
                        readOnly={readOnly}
                        placeholder="Informe o ano"
                    />

                    <Summary {...this.calculateSummary()} />

                    <Row>
                        <ItemList
                            cols="12 6"
                            readOnly={readOnly}
                            list={credits}
                            field="credits"
                            legend="Créditos"
                        />
                        <ItemList
                            cols="12 6"
                            showStatus={true}
                            readOnly={readOnly}
                            list={debits}
                            field="debits"
                            legend="Débitos"
                        />
                    </Row>
                </div>
                <div className="box-footer">
                    <button
                        type="button"
                        onClick={this.props.init}
                        className="btn btn-default"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className={`btn btn-${this.props.submitClass ||
                            'primary'}`}
                    >
                        {this.props.submitLabel || 'Salvar'}
                    </button>
                </div>
            </form>
        );
    }
}
BillingCycleForm = reduxForm({
    form: 'billing-cycle-form',
    destroyOnUnmount: false
})(BillingCycleForm);
const selector = formValueSelector('billing-cycle-form');

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycleForm);

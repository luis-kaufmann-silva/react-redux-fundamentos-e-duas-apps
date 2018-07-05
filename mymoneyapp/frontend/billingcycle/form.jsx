import React from 'react';
import { Field, reduxForm } from 'redux-form';
import LabelField from 'root/components/labelfield';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { init } from 'root/billingcycle/actions';

class BillingCycleForm extends React.Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
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
            className={`btn btn-${this.props.submitClass || 'primary'}`}
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);

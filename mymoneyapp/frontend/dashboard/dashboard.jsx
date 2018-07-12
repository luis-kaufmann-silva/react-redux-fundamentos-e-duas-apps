import React from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';

import ContentHeader from 'common/contentheader';
import Content from 'common/content';

import ValueBox from 'root/widget/valuebox';
import Grid from 'common/layout/grid';
import Row from 'common/layout/row';
import { getSummary } from 'root/dashboard/actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    componentWillMount() {
        this.props.getSummary();
    }
    render() {
        const { credit, debit } = this.props.summary || {};
        return (
            <div>
                <ContentHeader title="Dashboard" small="v1.0" />
                <Content>
                    <Row>
                        <ValueBox
                            cols={'12 12 4'}
                            text="Total de Créditos"
                            color="green"
                            icon="bank"
                            value={`R$ ${credit}`}
                        />

                        <ValueBox
                            cols={'12 12 4'}
                            text="Total de Débitos"
                            color="red"
                            icon="credit-card"
                            value={`R$ ${debit}`}
                        />
                        <ValueBox
                            cols={'12 12 4'}
                            text="Total de Consolidado"
                            color="blue"
                            icon="money"
                            value={`R$ ${credit - debit}`}
                        />
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getSummary }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

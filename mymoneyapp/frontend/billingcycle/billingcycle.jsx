import React from 'react';

import ContentHeader from 'common/contentheader';
import Content from 'common/content';
import Tabs from 'common/tab/tabs';
import TabsHeader from 'common/tab/tabsheader';
import TabHeader from 'common/tab/tabheader';
import TabsContent from 'common/tab/tabscontent';
import TabContent from 'common/tab/tabcontent';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { create, update, init, remove } from 'root/billingcycle/actions';

import BillingCycleList from 'root/billingcycle/list';
import BillingCycleForm from 'root/billingcycle/form';

class BillingCycle extends React.Component {
    componentWillMount() {
        this.props.init();
    }

    render() {
        const { create, update, remove } = this.props;
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamento" small="Cadastros" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                icon="bars"
                                label="Listar"
                                target="tabList"
                            />
                            <TabHeader
                                icon="plus"
                                label="Adicionar"
                                target="tabAdd"
                            />
                            <TabHeader
                                icon="pencil"
                                label="Editar"
                                target="tabEdit"
                            />
                            <TabHeader
                                icon="trash-o"
                                label="Excluir"
                                target="tabDelete"
                            />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id="tabAdd">
                                <BillingCycleForm
                                    onSubmit={create}
                                    submitClass="primary"
                                    submitLabel="Incluir"
                                />
                            </TabContent>
                            <TabContent id="tabEdit">
                                <BillingCycleForm
                                    onSubmit={update}
                                    submitClass="info"
                                    submitLabel="Alterar"
                                />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <BillingCycleForm
                                    submitClass="danger"
                                    submitLabel="Excluir"
                                    onSubmit={remove}
                                    readOnly={true}
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}
const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ create, update, init, remove }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycle);

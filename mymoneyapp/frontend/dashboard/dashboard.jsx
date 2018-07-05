import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from 'common/contentheader';
import Content from 'common/content';

import ValueBox from 'root/widget/valuebox';
import Grid from 'common/layout/grid';
import Row from 'common/layout/row';

class Dashboard extends React.Component {
  render() {
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
              value="R$ 10"
            />

            <ValueBox
              cols={'12 12 4'}
              text="Total de Débitos"
              color="red"
              icon="credit-card"
              value="R$ 10"
            />
            <ValueBox
              cols={'12 12 4'}
              text="Total de Consolidado"
              color="blue"
              icon="money"
              value="R$ 0"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;

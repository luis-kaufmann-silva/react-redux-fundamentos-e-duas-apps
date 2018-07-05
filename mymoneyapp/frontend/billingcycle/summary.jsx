import React from 'react';
import Grid from 'common/layout/grid';
import Row from 'common/layout/row';
import ValueBox from 'root/widget/valuebox';

export default ({ credit, debit }) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
        </fieldset>
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
    </Grid>
);

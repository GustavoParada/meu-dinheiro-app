import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'
import row from '../common/layout/row';

export default ({ credt, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>
                Resumo
        </legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${credt}`} text='Total de céditos' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${debt}`} text='Total de débitos' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`R$ ${credt - debt}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)
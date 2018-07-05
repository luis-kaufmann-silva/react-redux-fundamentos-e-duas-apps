import React from 'react';
import MenuItem from 'common/menuitem';
import MenuTree from 'common/menutree';

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="/" icon="dashboard" label="Dashboard" />
    <MenuTree icon="edit" label="Cadastros">
      <MenuItem
        path="/billingcycle"
        icon="money"
        label="Ciclos de Pagamentos"
      />
    </MenuTree>
  </ul>
);

import React from 'react';

import MenuItem from 'common/menuitem';
import MenuTree from 'common/menutree';

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="#/" icon="dashboard" label="Dashboard" />
    <MenuTree icon="edit" label="Cadastros">
      <MenuItem
        path="#/billing-cycles"
        icon="money"
        label="Ciclos de Pagamentos"
      />
    </MenuTree>
  </ul>
);

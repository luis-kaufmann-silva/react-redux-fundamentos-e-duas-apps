import React from 'react';
import ReduxToastr from 'react-redux-toastr';

import 'modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default props => (
  <ReduxToastr
    timeOut={2000}
    position="top-right"
    preventDuplicates={true}
    progressBar
  />
);

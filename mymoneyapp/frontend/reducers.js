import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReducer from 'root/dashboard/reducers';
import tabReducer from 'common/tab/reducers';
import billingCycleReducer from 'root/billingcycle/reducers';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;

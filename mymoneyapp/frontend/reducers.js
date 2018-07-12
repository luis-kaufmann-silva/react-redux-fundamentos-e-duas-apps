import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReducer from 'root/dashboard/reducers';
import tabReducer from 'common/tab/reducers';
import billingCycleReducer from 'root/billingcycle/reducers';
import authReducer from 'root/auth/reducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    auth: authReducer,
    toastr: toastrReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import changeTitleReducer from './titles/reducers';
import changeStatusSidebarReducer from './closeSideBar/reducers';

const allReducers = combineReducers({
  changeTitle: changeTitleReducer,
  changeStatusSidebar: changeStatusSidebarReducer,
});

export default allReducers;

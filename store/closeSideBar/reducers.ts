import ACTION_STATUS_SIDEBAR from './actionTypes';

const initialState = {
  sideBarIsOpened: false,
};

type ActionType = {
  type: string,
  payload: boolean,
};

const changeStatusSidebarReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ACTION_STATUS_SIDEBAR:
      return { ...state, sideBarIsOpened: action.payload };
    default:
      return state;
  }
};

export default changeStatusSidebarReducer;

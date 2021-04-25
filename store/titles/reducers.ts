import ACTION_CHANGE_TITLE from './actionTypes';

const initialState = {
  title: 'Развлечение',
};

type actionType = {
  type: string,
  payload: string,
};

const changeTitleReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ACTION_CHANGE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default changeTitleReducer;

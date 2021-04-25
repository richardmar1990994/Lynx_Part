import ACTION_CHANGE_TITLE from './actionTypes';

interface IActionChangeTitle {
  type: string,
  payload: string,
}

const actionChangeTitle = (title: string): IActionChangeTitle => ({
  type: ACTION_CHANGE_TITLE,
  payload: title,
});

export default actionChangeTitle;

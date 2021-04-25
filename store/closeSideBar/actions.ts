import ACTION_STATUS_SIDEBAR from './actionTypes';

interface IActionOpenSidebar {
  type: string,
  payload: boolean,
}

const actionChangeStatusSidebar = (value: boolean): IActionOpenSidebar => ({
  type: ACTION_STATUS_SIDEBAR,
  payload: value,
});

export default actionChangeStatusSidebar;

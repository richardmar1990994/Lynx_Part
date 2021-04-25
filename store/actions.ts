import actionChangeTitle from './titles/actions';
import actionChangeStatusSidebar from './closeSideBar/actions';

interface IState {
  changeTitle: {
    title: string,
  }
  changeStatusSidebar: {
    sideBarIsOpened: boolean,
  }
}

const mapStateToProps = (state: IState) => ({
  title: state.changeTitle.title,
  sideBarIsOpened: state.changeStatusSidebar.sideBarIsOpened,
});

const mapDispatchToProps = {
  actionChangeTitle,
  actionChangeStatusSidebar,
};

export { mapStateToProps, mapDispatchToProps };

import React, {
  FC, useState,
} from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import menuTitles from './content';
import { mapStateToProps, mapDispatchToProps } from '../../store/actions';

type SidebarProps = {
  sideBarIsOpened: boolean,
  actionChangeStatusSidebar: any,
};

const Sidebar: FC<SidebarProps> = ({ sideBarIsOpened, actionChangeStatusSidebar }) => {
  const [isActive, setIsActive] = useState([false, false, false, true, false]);

  return (
    <aside className={`sidebar ${sideBarIsOpened ? 'sidebar_opened' : ''}`}>

      <div
        className="sidebar__side"
        onClick={() => { actionChangeStatusSidebar(!sideBarIsOpened); }}
        role="presentation"
      />
      <div className="sidebar__union" />

      <div className="menu">
        <div className={`menu__wrapper wrapper${sideBarIsOpened ? '_opened' : ''}`}>
          <div className="wrapper__logo" />
          <div className={`wrapper__title${sideBarIsOpened ? '_opened' : ''}`}>
            beco
          </div>
        </div>
      </div>

      <div className={`items${sideBarIsOpened ? ' items_opened' : ''}`}>
        {menuTitles.map(
          ({
            id,
            title,
            img,
            imgActive,
          }, index) => (
            <MenuItem
              index={index}
              titleName={title}
              isActive={isActive}
              setIsActive={setIsActive}
              img={img}
              imgActive={imgActive}
              key={id}
            />
          ),
        )}
      </div>
    </aside>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

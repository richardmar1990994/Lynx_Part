import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import search from '../../assets/header/search.png';
import { mapStateToProps, mapDispatchToProps } from '../../store/actions';

type HeaderProps = {
  title: string,
  sideBarIsOpened: boolean,
  actionChangeStatusSidebar: any,
};

const Header: FC<HeaderProps> = ({ title, sideBarIsOpened, actionChangeStatusSidebar }) => {
  const handleCloseSidebar = () => sideBarIsOpened && actionChangeStatusSidebar(!sideBarIsOpened);
  const [widthOfSearchInputFull, setWidthOfSearchInputFull] = useState(false);

  useEffect(() => {
    const heightOfScreen = document.documentElement.clientHeight;
    const widthOfScreen = document.documentElement.clientWidth;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 24) {
        if (heightOfScreen >= 320 && widthOfScreen >= 568
            && heightOfScreen < 1024 && widthOfScreen < 768) {
          return null;
        }
        setWidthOfSearchInputFull(false);
        return null;
      }
      setWidthOfSearchInputFull(true);
      return null;
    });
  });

  return (
    <header
      className="header"
      onClick={handleCloseSidebar}
      role="presentation"
    >
      <div className="wrapper">
        <span className="wrapper__title">{title}</span>
        <div className={`wrapper__search search${widthOfSearchInputFull ? '' : '_minimized'}`}>
          <div>
            <img
              src={search}
              alt="Not found"
              className="search__icon"
            />
            <input
              type="text"
              placeholder="Какой магазин вам нужен?"
              className="search__input"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

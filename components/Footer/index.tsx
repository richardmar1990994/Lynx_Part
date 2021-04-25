import React, { FC } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/actions';

type FooterProps = {
  sideBarIsOpened: boolean,
  actionChangeStatusSidebar: any,
};

const Footer: FC<FooterProps> = ({ sideBarIsOpened, actionChangeStatusSidebar }) => (
  <footer
    className="footer"
    onClick={() => sideBarIsOpened && actionChangeStatusSidebar(!sideBarIsOpened)}
    role="presentation"
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

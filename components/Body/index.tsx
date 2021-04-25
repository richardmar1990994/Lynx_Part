import React, { FC } from 'react';
import { connect } from 'react-redux';
import content from './Coupone/content';
import Coupone from './Coupone';
import { mapStateToProps, mapDispatchToProps } from '../../store/actions';

type BodyProps = {
  sideBarIsOpened: boolean,
  actionChangeStatusSidebar: any,
};

const Body: FC<BodyProps> = ({ sideBarIsOpened, actionChangeStatusSidebar }) => {
  const handlerCloseSidebar = () => sideBarIsOpened && actionChangeStatusSidebar(!sideBarIsOpened);
  return (
    <main
      className="body"
      onClick={handlerCloseSidebar}
      role="presentation"
    >
      <div className="wrapper">
        {content.map(({
          title,
          description,
          code,
          typeOfDiscount,
          img,
        }, index) => (
          <Coupone
            title={title}
            description={description}
            code={code}
            typeOfDiscount={typeOfDiscount}
            img={img}
            key={String(index)}
          />
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);

import React, { FC } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../store/actions';

type MenuItemProps = {
  index: number,
  titleName: string,
  isActive: boolean[],
  setIsActive: any,
  img: string,
  imgActive: string,
  actionChangeTitle: any,
};

const MenuItem: FC<MenuItemProps> = ({
  index,
  titleName,
  isActive,
  setIsActive,
  actionChangeTitle,
  img,
  imgActive,
}) => {
  const handlerActive = (indexFromProps: number): void => {
    const tempArray: boolean[] = isActive.slice();
    actionChangeTitle(titleName);
    setIsActive(tempArray.map((_status, indexOfStatus) => indexOfStatus === indexFromProps));
  };

  return (
    <div
      className={`items__item ${isActive[index] ? 'items__item_active' : ''}`}
      onClick={() => { handlerActive(index); }}
      role="presentation"
    >
      <img src={isActive[index] ? imgActive : img} alt="Not found" />
      <span>{titleName}</span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

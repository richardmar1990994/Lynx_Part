import React, { FC } from 'react';

type CouponeProps = {
  title: string,
  description: string,
  code: string,
  typeOfDiscount: string,
  img: string,
};

const Coupone: FC<CouponeProps> = ({
  title,
  description,
  code,
  typeOfDiscount,
  img,
}) => (
  <div className="coupone">
    <div className="left-side">
      <div className="left-side titles">
        <span className="titles__title">{title}</span>
        <span className="titles__description">{description}</span>
      </div>
      <div className="left-side discount-info">
        <span className="discount-info__code">{code}</span>
        <span className="discount-info__type-discount">{typeOfDiscount}</span>
      </div>
    </div>
    <div className="right-side">
      <img src={img} alt="Not found" />
    </div>
  </div>
);

export default Coupone;

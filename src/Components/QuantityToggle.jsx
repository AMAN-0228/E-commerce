import React from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { styled } from "styled-components";

const QuantityToggle = ({ quantity, Increment, Decrement }) => {
  return (
    <Wrapper className="numerical-value">
      <BiMinus className="icon" onClick={Decrement} />
      <span>{quantity}</span>
      <BsPlus className="icon" onClick={Increment} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 9px;
  .icon {
    font-size: 21px;
    cursor: pointer;
  }
`;

export default QuantityToggle;

import React from 'react';
import styled from 'styled-components';
import ButtonProps from './Button.props';

const ButtonStyled = styled.button`
  background: blueviolet;
  color: #eee;
  border: none;
  padding: 5px 15px;
  border-radius: 3px;
  &:hover {
    background: #333;
    cursor: pointer;
  }
`;

const Button = (props) => {
  const { text, onClick, size } = props;

  return (
    <ButtonStyled onClick={() => onClick()} size={size}>
      {text}
    </ButtonStyled>
  );
};

Button.defaultProps = ButtonProps.defaultProps;
Button.propTypes = ButtonProps.propTypes;

export default Button;

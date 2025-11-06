import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg>
          <defs>
            <linearGradient id="gradiant">
              <stop stopColor="#FF8282" offset="0%" />
              <stop stopColor="#E178ED" offset="100%" />
            </linearGradient>
          </defs>
          <rect height={50} width={160} rx={35} ry={35} stroke="url(#gradiant)" fill="none" />
        </svg>
        <span className="content">
          <BsFillPersonLinesFill className="icon" />
          Contact Me
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 50px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
  }

  .btn svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .btn svg rect {
    stroke-width: 3;
    transition: all .6s ease;
  }

  .content {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
  }

  .icon {
    font-size: 20px;
  }

  .btn:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
  }
`;

export default Button;

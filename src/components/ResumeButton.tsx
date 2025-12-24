import styled from "styled-components";
import { FaFileDownload } from "react-icons/fa";

const ResumeButton = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon resume">
          <span className="tooltip">Résumé</span>
          <a href="/RESUME_MAIN.pdf" target="_blank" rel="noreferrer">
            <FaFileDownload size="1.4em" />
          </a>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    justify-content: center;
    gap: 20px;
    padding: 0;
  }

  .icon {
    position: relative;
    background: #fff;
    border-radius: 12px;
    width: 62px;
    height: 62px;
    border: 1px solid #e5e7eb; /* subtle gray border */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    a {
      color: #555;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      transition: color 0.2s ease;
    }

    &:hover {
      transform: translateY(-6px) scale(1.05);
    }

    &:active {
      animation: bounce 0.3s ease;
    }
  }

  .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    white-space: nowrap;
    background: #4a5568; /* dark gray default */

    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: #4a5568;
      transition: background 0.3s ease;
    }
  }

  .icon:hover .tooltip {
    top: -45px;
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .resume:hover a,
  .resume:hover .tooltip,
  .resume:hover .tooltip::before {
    color: #fff;
    background:rgb(6, 11, 17);
  }

  @keyframes bounce {
    0%   { transform: scale(1); }
    30%  { transform: scale(0.9); }
    60%  { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

export default ResumeButton;

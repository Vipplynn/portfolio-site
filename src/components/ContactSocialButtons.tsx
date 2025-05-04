import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSocialButtons = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon github">
          <span className="tooltip">GitHub</span>
          <a href="https://github.com/Vipplynn" target="_blank" rel="noreferrer">
            <FaGithub size="1.4em" />
          </a>
        </li>
        <li className="icon email">
          <span className="tooltip">Email</span>
          <a href="mailto:christianc0000@gmail.com,cac40@sfu.ca">
            <FaEnvelope size="1.4em" />
          </a>
        </li>
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <a href="https://linkedin.com/in/chochristian" target="_blank" rel="noreferrer">
            <FaLinkedin size="1.4em" />
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
    padding-top: 40px;
    justify-content: center;
    gap: 20px;
  }

  .icon {
    position: relative;
    background: #fff;
    border-radius: 12px; /* Rounded square */
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    border: 1px solid #e5e7eb; /* subtle gray border */
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
    background: var(--tooltip-bg, #333);

    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: var(--tooltip-bg, #333);
      transition: background 0.3s ease;
    }
  }

  .icon:hover .tooltip {
    top: -45px;
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  /* Platform-specific hover colors */
  .github:hover a,
  .github:hover .tooltip,
  .github:hover .tooltip::before {
    color: #fff;
    background: #171515;
  }

  .email:hover a,
  .email:hover .tooltip,
  .email:hover .tooltip::before {
    color: #fff;
    background: #c71610;
  }

  .linkedin:hover a,
  .linkedin:hover .tooltip,
  .linkedin:hover .tooltip::before {
    color: #fff;
    background: #0a66c2;
  }

  @keyframes bounce {
    0%   { transform: scale(1); }
    30%  { transform: scale(0.9); }
    60%  { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

export default ContactSocialButtons;

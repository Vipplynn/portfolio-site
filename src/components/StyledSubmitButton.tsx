import styled from "styled-components";

const StyledSubmitButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 0.5rem; /* Match with rest of site */
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  width: auto;
  cursor: pointer;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

export default StyledSubmitButton;

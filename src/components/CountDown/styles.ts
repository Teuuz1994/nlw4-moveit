import styled, { css } from 'styled-components';

interface CicleButtonActionProps {
  isActive: boolean;
  hasFinished: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div span:first-child {
    border-right: 1px solid #f8f1f3;
  }

  > div span:last-child {
    border-left: 1px solid #f8f1f3;
  }
`;

export const Count = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
`;

export const Numbers = styled.span`
  flex: 1;
`;

export const Separator = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

export const CicleButtonAction = styled.button<CicleButtonActionProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  ${({ isActive, hasFinished }) =>
    isActive
      ? css`
          background: var(--white);
          color: var(--title);
        `
      : css`
          ${!hasFinished
            ? css`
                background: var(--blue);
                color: var(--white);
              `
            : css`
                background: var(--white);
                color: var(--text);
                cursor: not-allowed;
              `}
        `};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background 0.2s;

  ${({ isActive }) =>
    isActive
      ? css`
          &:not(:disabled):hover {
            background: var(--red);
            color: var(--white);
          }
        `
      : css`
          &:not(:disabled):hover {
            background: var(--blue-dark);
          }
        `};
`;

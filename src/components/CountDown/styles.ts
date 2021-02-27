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
  color: ${({ theme }) => theme.colors.title};

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

  background: ${({ theme }) => theme.colors.white};
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
          background: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.title};
        `
      : css`
          ${!hasFinished
            ? css`
                background: ${({ theme }) => theme.colors.blue};
                color: ${({ theme }) => theme.colors.white};
              `
            : css`
                background: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.text};
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
            background: ${({ theme }) => theme.colors.red};
            color: ${({ theme }) => theme.colors.white};
          }
        `
      : css`
          &:not(:disabled):hover {
            background: ${({ theme }) => theme.colors.blue_dark};
          }
        `};
`;

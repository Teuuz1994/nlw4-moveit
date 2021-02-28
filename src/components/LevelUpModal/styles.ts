import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 5rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
`;

export const Header = styled.header`
  font-size: 8.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  background: url('/icons/levelup.svg') no-repeat center;
  background-size: contain;
`;

export const Congratulations = styled.strong`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const NextLevelDescription = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.25rem;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0px;
`;

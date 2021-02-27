import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Strong = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;
`;

export const LevelUpImage = styled.img`
  margin-bottom: 1rem;
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_line};
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    line-height: 1.5;
  }
`;

export const NewChallenge = styled.strong`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
  margin: 1.5rem 0 1rem;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  button {
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.white};

    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const FailedButton = styled.button`
  background: ${({ theme }) => theme.colors.red};
`;

export const SuccessButton = styled.button`
  background: ${({ theme }) => theme.colors.green};
`;

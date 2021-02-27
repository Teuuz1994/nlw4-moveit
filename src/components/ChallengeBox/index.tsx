import { useCallback } from 'react';

import { useChallenge } from '../../hooks/Challenge';
import { useCountDown } from '../../hooks/CountDown';

import {
  Container,
  ChallengeNotActive,
  Paragraph,
  Strong,
  LevelUpImage,
  ChallengeActive,
  Header,
  Main,
  NewChallenge,
  FailedButton,
  Footer,
  SuccessButton,
} from './styles';

const ChallengeBox = () => {
  const {
    activeChallenge,
    handleResetActiveChallenge,
    handleCompleteChallenge,
  } = useChallenge();

  const { handleResetCountDown } = useCountDown();

  const handleChallengeSucceeded = useCallback(() => {
    handleCompleteChallenge();
    handleResetCountDown();
  }, [handleCompleteChallenge, handleResetCountDown]);

  const handleChallengeFailed = useCallback(() => {
    handleResetActiveChallenge();
    handleResetCountDown();
  }, [handleResetActiveChallenge, handleResetCountDown]);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <Header>Ganhe {activeChallenge.amount} xp</Header>

          <Main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Exercício" />
            <NewChallenge>Novo desafio</NewChallenge>
            <p>{activeChallenge.description}</p>
          </Main>

          <Footer>
            <FailedButton type="button" onClick={handleChallengeFailed}>
              Falhei
            </FailedButton>
            <SuccessButton type="button" onClick={handleChallengeSucceeded}>
              Completei
            </SuccessButton>
          </Footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <Strong>Finalize um ciclo para receber um desafio</Strong>
          <Paragraph>
            <LevelUpImage src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </Paragraph>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;

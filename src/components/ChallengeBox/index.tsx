import { useChallenge } from '../../hooks/Challenge';

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
  const { activeChallenge, resetActiveChallenge } = useChallenge();

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <Header>Ganhe {activeChallenge.amount} xp</Header>

          <Main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <NewChallenge>Novo desafio</NewChallenge>
            <p>{activeChallenge.description}</p>
          </Main>

          <Footer>
            <FailedButton type="button" onClick={resetActiveChallenge}>
              Falhei
            </FailedButton>
            <SuccessButton type="button">Completei</SuccessButton>
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

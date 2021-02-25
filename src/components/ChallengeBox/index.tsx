import {
  Container,
  ChallengeNotActive,
  Paragraph,
  Strong,
  Image,
} from './styles';

const ChallengeBox = () => {
  return (
    <Container>
      <ChallengeNotActive>
        <Strong>Finalize um ciclo para receber um desafio</Strong>
        <Paragraph>
          <Image src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </Paragraph>
      </ChallengeNotActive>
    </Container>
  );
};

export default ChallengeBox;

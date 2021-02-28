import { useChallenge } from '../../hooks/Challenge';

import {
  Container,
  Overlay,
  CloseModalButton,
  Congratulations,
  Header,
  NextLevelDescription,
} from './styles';

const LevelUpModal = () => {
  const { level, handleCloseLevelUpModal } = useChallenge();

  return (
    <Overlay>
      <Container>
        <Header>{level}</Header>

        <Congratulations>Parabéns</Congratulations>
        <NextLevelDescription>
          Você alcançou um novo level.
        </NextLevelDescription>

        <CloseModalButton type="button" onClick={handleCloseLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </CloseModalButton>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;

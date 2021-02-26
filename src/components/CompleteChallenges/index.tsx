import { useChallenge } from '../../hooks/Challenge';

import { Container } from './styles';

const CompleteChallenges = () => {
  const { challengeComplete } = useChallenge();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengeComplete}</span>
    </Container>
  );
};

export default CompleteChallenges;

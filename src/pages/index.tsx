import {
  ExperienceBar,
  Profile,
  CompleteChallenges,
  CountDown,
} from '../components';
import ChallengeBox from '../components/ChallengeBox';

import { Section, Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <Section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </Section>
    </Container>
  );
}

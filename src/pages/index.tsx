import { GetServerSideProps } from 'next';
import {
  ExperienceBar,
  Profile,
  CompleteChallenges,
  CountDown,
} from '../components';
import ChallengeBox from '../components/ChallengeBox';
import { ChallengeProvider } from '../hooks/Challenge';
import { CountDownProvider } from '../hooks/CountDown';

import { Section, Container } from '../styles/pages/Home';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeComplete: number;
}

export default function Home({
  challengeComplete,
  currentExperience,
  level,
}: HomeProps) {
  return (
    <ChallengeProvider
      level={level}
      currentExperience={currentExperience}
      challengeComplete={challengeComplete}
    >
      <Container>
        <ExperienceBar />

        <CountDownProvider>
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
        </CountDownProvider>
      </Container>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengeComplete } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeComplete: Number(challengeComplete),
    },
  };
};

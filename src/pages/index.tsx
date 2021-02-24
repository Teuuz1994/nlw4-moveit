import { ExperienceBar, Profile, CompleteChallenges, CountDown } from '../components'

import { Section } from '../styles/pages/Home';

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <Section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </Section>
    </div>
  )
}

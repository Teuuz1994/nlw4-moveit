import { useChallenge } from '../../hooks/Challenge';

import {
  Header,
  Span,
  Line,
  SpanExperience,
  SpanExperienceConteiner,
} from './style';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenge();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <Span>8 xp</Span>
      <Line>
        <SpanExperienceConteiner width={`${percentToNextLevel}%`}>
          <SpanExperience left={`${percentToNextLevel}%`}>
            {currentExperience} xp
          </SpanExperience>
        </SpanExperienceConteiner>
      </Line>
      <Span>{experienceToNextLevel} xp</Span>
    </Header>
  );
};

export default ExperienceBar;

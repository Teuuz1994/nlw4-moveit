import {
  Header,
  Span,
  Line,
  SpanExperience,
  SpanExperienceConteiner,
} from './style';

const ExperienceBar = () => {
  return (
    <Header>
      <Span>8 xp</Span>
      <Line>
        <SpanExperienceConteiner width="50%">
          <SpanExperience left="50%">300 xp</SpanExperience>
        </SpanExperienceConteiner>
      </Line>
      <Span>600 xp</Span>
    </Header>
  );
};

export default ExperienceBar;
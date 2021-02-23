import { Header, Span, Line } from './style';

const ExperienceBar = () => {
  return (
    <Header>
      <Span>8 xp</Span>
      <Line>
        <div style={{ width: '60%' }}>
          <Span style={{ left: '50%' }}>300 xp</Span>
        </div>
      </Line>
      <Span>600 xp</Span>
    </Header>
  );
};

export default ExperienceBar;

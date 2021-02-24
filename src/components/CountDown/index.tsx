import { useCallback, useEffect, useState } from 'react';
import { Container, Count, Separator, Numbers, StarCicloButton } from './styles';

const CountDown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleStartCountDown = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(prevState => prevState - 1);
      }, 1000);
    }
  }, [active, time])

  return (
    <>
    <Container>
      <Count>
        <Numbers>{minuteLeft}</Numbers>
        <Numbers>{minuteRight}</Numbers>
      </Count>
      <Separator>:</Separator>
      <Count>
        <Numbers>{secondLeft}</Numbers>
        <Numbers>{secondRight}</Numbers>
      </Count>
    </Container>

    <StarCicloButton onClick={handleStartCountDown}>Iniciar um ciclo</StarCicloButton>
    </>
  );
};

export default CountDown;

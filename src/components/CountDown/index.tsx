import { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Count,
  Separator,
  Numbers,
  CicleButtonAction,
} from './styles';

let countDownTimeOut: number;

const CountDown = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleStartCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleResetCountDown = useCallback(() => {
    clearTimeout(countDownTimeOut);
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(prevState => prevState - 1);
      }, 1000);
    }
  }, [isActive, time]);

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

      <CicleButtonAction
        isActive={isActive}
        onClick={isActive ? handleResetCountDown : handleStartCountDown}
      >
        {isActive ? 'Abandonar ciclo' : 'Iniciar ciclo'}
      </CicleButtonAction>
    </>
  );
};

export default CountDown;

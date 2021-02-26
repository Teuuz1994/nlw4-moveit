import { useCallback, useEffect, useState, useRef } from 'react';

import { useChallenge } from '../../hooks/Challenge';

import {
  Container,
  Count,
  Separator,
  Numbers,
  CicleButtonAction,
} from './styles';

const CountDown = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useChallenge();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const CountdownTimeOut = useRef(0);

  const handleStartCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleResetCountDown = useCallback(() => {
    clearTimeout(CountdownTimeOut.current);
    setIsActive(false);
    setTime(0.1 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      CountdownTimeOut.current = setTimeout(() => {
        setTime(prevState => prevState - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
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
        hasFinished={hasFinished}
        isActive={isActive}
        disabled={hasFinished}
        onClick={isActive ? handleResetCountDown : handleStartCountDown}
      >
        {isActive
          ? 'Abandonar ciclo'
          : !hasFinished && !isActive
          ? 'Iniciar ciclo'
          : 'Ciclo finalizado'}
      </CicleButtonAction>
    </>
  );
};

export default CountDown;

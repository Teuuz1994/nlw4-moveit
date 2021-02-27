import { useCountDown } from '../../hooks/CountDown';

import {
  Container,
  Count,
  Separator,
  Numbers,
  CicleButtonAction,
} from './styles';

const CountDown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    handleResetCountDown,
    handleStartCountDown,
  } = useCountDown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

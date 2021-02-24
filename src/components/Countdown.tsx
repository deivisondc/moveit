import { useState, useEffect, useMemo, useCallback } from 'react';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const [minuteLeft, minuteRight] = useMemo(() => {
    const minutes = Math.floor(time / 60);
    return String(minutes).padStart(2, '0').split('');
  }, [time]);

  const [secondLeft, secondRight] = useMemo(() => {
    const seconds = time % 60;
    return String(seconds).padStart(2, '0').split('');
  }, [time]);

  const startCountdown = useCallback(() => {
    setActive(true);
  }, [])

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}

export default Countdown;

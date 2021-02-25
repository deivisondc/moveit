import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={() => {}}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccededButton}
              onClick={() => {}}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Complete-os e ganhe experiência e avance de level.
          </p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;

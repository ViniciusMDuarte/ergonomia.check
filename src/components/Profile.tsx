import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ViniciusMDuarte.png" alt="Vinicius Duarte"/>
            <div>
                <strong>Bom dia, Vinicius</strong>
                <p>
                    <img src="icons/level.svg" alt="icone level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}

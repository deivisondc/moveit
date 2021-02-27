import Head from 'next/head';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import { GetServerSideProps } from 'next';
import React from 'react';

interface HomeProps {
  level: number;
  currentXp: number;
  completedChallenge: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentXp={props.currentXp}
      completedChallenge={props.completedChallenge}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it </title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXp, completedChallenges } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      completedChallenges: Number(completedChallenges)
    }
  }
}

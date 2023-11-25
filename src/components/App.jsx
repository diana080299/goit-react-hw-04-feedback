// import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const statistic = { good, neutral, bad };

  function onLeaveFeedback(option) {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return Object.values(statistic).reduce((total, count) => total + count, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage().toFixed(0);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 30,
        border: '8px solid #00FFFF',
      }}
    >
      <Section title="Please leave your feedback" />
      <FeedbackOptions
        options={Object.keys(statistic)}
        onLeaveFeedback={onLeaveFeedback}
      />
      {total === 0 ? (
        <Notification />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}

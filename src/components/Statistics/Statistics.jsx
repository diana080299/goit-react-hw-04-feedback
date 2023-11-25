import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statCont}>
      <p className={css.wrap}>Good: {good}</p>
      <p className={css.wrap}>Neutral: {neutral}</p>
      <p className={css.wrap}>Bad: {bad}</p>
      <p className={css.wrap}>Total: {total}</p>
      <p className={css.wrap}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

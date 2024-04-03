import styles from './result.module.scss';

const Result = ({result}) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{result.name}</div>
      <div className={styles.count}>{result.count.toLocaleString('en-US')}</div>
    </div>
  );
};

export default Result
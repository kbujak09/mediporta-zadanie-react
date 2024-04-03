import styles from './title.module.scss';

const Title = ({title}) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  );
}

export default Title;
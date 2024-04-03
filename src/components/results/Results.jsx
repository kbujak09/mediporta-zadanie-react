import styles from './results.module.scss';
import Result from './result/Result';
import { Context } from '../../context/context';

import { useContext } from 'react';
import { ClipLoader } from 'react-spinners';

const Results = ({data, error, isLoading}) => {

  const { pageSize, currentPage } = useContext(Context);

  const lastElement = currentPage * pageSize;
  const firstElement = lastElement - pageSize;

  if (error) {
    return (
      <div className={styles.error}>{error}</div>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <ClipLoader />
      </div>
    )
  } 

  if (!data || !data.items || data.items.length === 0 ) {
    return (
      <div className={styles.error}>
        Brak wyników
      </div>
    )
  }
  
  let i = 0;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>Nazwa tagu</div>
        <div className={styles.count}>Powiązane posty</div>
      </div>
      {data.items && <div className={styles.results}>{data.items.slice(firstElement, lastElement).map(item => {
      return <Result key={i++} result={item}/>
      })}</div>}
    </div>
    )
}

export default Results;
import styles from './search.module.scss';
import Input from './input/Input';
import Pagesize from './pagesize/Pagesize';
import Sort from './sort/Sort';
import Button from './button/Button';
import { Context } from '../../context/context';

import { useContext } from 'react';

const Search = () => {

  const { handleInputChange, handlePageSizeChange, handleSortChange, fetchData, handleCurrentSearchChange, input, getFetchLink } = useContext(Context);

  const handleButtonClick = () => {
    fetchData(getFetchLink(input));
    handleCurrentSearchChange(input)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <Pagesize 
          size={'small'}
          title={'Ilość'}
          label='Ilość'
          defaultValue={20}
          onChange={(e) => handlePageSizeChange(e.target.value)}
          items={[10, 20, 25]}/>
        <Sort 
          size={'small'}
          label={'Sortowanie'}
          defaultValue={'populardesc'}
          onChange={(e) => handleSortChange(e.target.value)}/>
      </div>
      <div className={styles.input}>
        <Input 
          size={'medium'}
          label='Szukaj tagów'
          variant={'outlined'}
          onChange={(e) => handleInputChange(e.target.value)}
          fullWidth={true}/>
        <Button 
          variant={'text'}
          onClick={handleButtonClick}
          text={'SZUKAJ'}/>
      </div>
    </div>
  );
}

export default Search;
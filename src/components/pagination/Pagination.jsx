import styles from './pagination.module.scss';
import { Context } from '../../context/context';

import { Pagination as PaginationMui } from '@mui/material';
import { useContext } from 'react';

const Pagination = () => {

  const { pageSize, handlePageChange, currentPage } = useContext(Context);

  const calculatePageCount = (items, pageSize) => {
    return Math.ceil(items / pageSize);
  }

  return (
    <div className={styles.container}>
      <PaginationMui count={calculatePageCount(100, pageSize)} defaultPage={1} onChange={(e, value) => handlePageChange(value)} page={currentPage}/>
    </div>
  );
};

export default Pagination;
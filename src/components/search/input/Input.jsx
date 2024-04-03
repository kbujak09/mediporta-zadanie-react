import styles from './input.module.scss';

import { TextField } from '@mui/material';

const Input = ({size, label, variant, onChange, fullWidth}) => {
  return (
    <div className={styles.container}>
      <TextField
        size={size}
        label={label}
        variant={variant}
        onChange={onChange} 
        fullWidth={fullWidth}/>
    </div>
  );
}

export default Input;
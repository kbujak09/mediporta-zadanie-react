import styles from './button.module.scss';

import { Button as ButtonMui } from '@mui/material';

const Button = ({variant, onClick, text}) => {
  return (
    <div className={styles.container}>
      <ButtonMui onClick={onClick} variant={variant}>{text}</ButtonMui>
    </div>
  );
};

export default Button;
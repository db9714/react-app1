import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './css/Buttons.module.css';

const PlainButton = ({ className, title, ...rest }) => (
  <Button className={[styles.btnButton, className && className].join(' ')} {...rest}>
    {title}
  </Button>
);

const TitleIconButton = ({ className, title, icon, ...rest }) => (
  <Button className={[styles.btnButton, className && className].join(' ')} {...rest}>
    <div className={styles.titleIconDiv}>
      <span className={styles.txtTitle}>{title}</span>
      <i className={[styles.imgIcon, icon].join(' ')} />
    </div>
  </Button>
);
export { PlainButton, TitleIconButton };

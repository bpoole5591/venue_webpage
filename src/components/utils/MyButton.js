import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = props => {
  const { link, background, color, text, icon } = props;
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{ background, color }}
    >
      <img src={icon} className="iconImage" alt="Ticket Icon" />
      {text}
    </Button>
  );
};

export default MyButton;

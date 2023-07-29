import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./style.scss";

function FileProgress({ percentage }) {
  return (
    <div style={{ width: 250, height: 250 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}

export default FileProgress
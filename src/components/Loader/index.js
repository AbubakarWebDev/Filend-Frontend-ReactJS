import React from 'react';
import { HashLoader } from "react-spinners";

import styles from "./style.module.scss";
const { loaderContainer } = styles;

function Loader() {
  return (
    <div className={loaderContainer}>
      <HashLoader size={80} />
    </div>
  );
}

export default Loader;
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { MdGppGood } from "react-icons/md";
import 'react-circular-progressbar/dist/styles.css';

import "./style.scss";

function FileProgress({ percentage }) {
  return (
    <div style={{ width: 200, height: 200, margin: "0 auto" }}>
      <CircularProgressbarWithChildren
        value={percentage}
      >
        <div className="text-2xl flex flex-col items-center">
          {(percentage >= 100) && (
            <div className="flex flex-col items-center mb-2">
              <MdGppGood size={40} />
              <p>Finished</p>
            </div>
          )}
          <p>{percentage}%</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default FileProgress
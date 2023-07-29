import { useRef, useState } from 'react';
import { FaFileUpload } from "react-icons/fa";

const UploadFile = ({ handleUpload }) => {
  const fileRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  function onDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files.length > 1) {
      alert('You can only drop one file at a time');
      return;
    }

    handleUpload(files[0]);
  }

  function onDragOver(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function onDragLeave(e) {
    e.preventDefault();
    setDragOver(false);
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className="p-5 lg:w-2/5 rounded-md bg-gray shadow-md border"
    >
      <div
        className={`${dragOver ? "bg-yellow-300" : ""} group h-full flex justify-center items-center py-20 border hover:border-black border-dashed hover:bg-white cursor-pointer`}
        onClick={() => fileRef.current.click()}
      >
        <div
          className="flex flex-col items-center gap-2 cursor-pointer group-hover:text-black text-white px-5"
        >
          <FaFileUpload size={60} />
          <span className="text-gray-font text-2xl text-center font-medium">
            Click to browse or drag files here to start sharing
          </span>
        </div>

        <input
          type="file"
          ref={fileRef}
          className="hidden"
          onChange={(e) => handleUpload(e.target.files[0])}
        />
      </div>
    </div>
  );
};
export default UploadFile;

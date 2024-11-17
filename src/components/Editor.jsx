import React from 'react';
import Box from './Box';

function Editor() {
  return (
    <>
      <div className=" flex border py-2 px-2  bg-[#071F2E]">
        <Box lang={'Html'} />
        <Box lang={'Css'} />
        <Box lang={'Js'} />
      </div>
    </>
  );
}

export default Editor;

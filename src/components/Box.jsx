import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';

function Box({ lang, value, onChange, logo }) {
  const languageMode = {
    HTML: 'xml',
    CSS: 'css',
    JS: 'javascript',
  };

  return (
    <div className="flex flex-col p-0 bg-black">
      <div className="flex justify-center py-2 text-2xl text-white bg-[#071F2E]">
        <h1 className="flex gap-x-1">
          {logo}
          {lang}
        </h1>
      </div>
      <div className="h-full flex-1 overflow-auto space-x-1">
        <CodeMirror
          value={value}
          options={{
            mode: languageMode[lang],
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
            autoCloseTags: true,
            matchTags: true,
            autoCloseBrackets: true,
            matchBrackets: true,
          }}
          onBeforeChange={(editor, data, value) => onChange(value)}
          className="h-full"
        />
      </div>
    </div>
  );
}

export default Box;

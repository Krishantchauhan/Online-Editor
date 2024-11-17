import React, { useState, useEffect } from 'react';
import Box from './Box';
import Output from './Output';
import { useLocalStorage } from './LocalStorage';

function CodeEditor() {
  const htmlDefault = `<h1>Krishant</h1>
<button class="btn">Click Me</button>
  <div class="container">
  </div>`;

  const cssDefault = `
  body {
    text-align: center;
    color: blue;
  }`;

  const jsDefault = `const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
console.log(btn);

function check() {
  const node = document.createElement('h1');
  node.textContent = "Krishnat Chauhan";
  container.appendChild(node);
}

btn.addEventListener('click', check);`;

  const [html, updateHtml] = useLocalStorage('html', htmlDefault);
  const [css, updateCss] = useLocalStorage('css', cssDefault);
  const [js, updateJs] = useLocalStorage('js', jsDefault);

  return (
    <div className="flex flex-col h-screen ">
      {/* Top Section: Editors */}
      <div className="flex md:flex-row flex-col md:p-2 bg-black md:space-x-2 text-lg leading-5">
        {/* HTML Editor */}
        <div className="md:w-1/3 html-logo">
          <Box
            lang="HTML"
            value={html}
            onChange={updateHtml}
            logo={
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" fill="#ffffff">
                <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"></path>
              </svg>
            }
          />
        </div>

        {/* CSS Editor */}
        <div className="md:w-1/3">
          <Box
            lang="CSS"
            value={css}
            onChange={updateCss}
            logo={
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 32 32" fill="#ffffff">
                <path d="M 6 4 L 8 25 L 16 28 L 24 25 L 26 4 L 6 4 z M 9.3320312 7 L 22.652344 7 L 22.390625 10 L 16.695312 13 L 19.121094 13 L 22 13 L 22.123047 13 L 21.611328 19.007812 L 21.630859 19 L 21.355469 22 L 16 24 L 10.634766 22 L 10.304688 18 L 13.326172 18 L 13.482422 20.033203 L 16 20.904297 L 18.521484 20.050781 L 18.867188 16 L 10.130859 16 L 9.8730469 13 L 15.783203 10 L 9.609375 10 L 9.3320312 7 z"></path>
              </svg>
            }
          />
        </div>

        {/* JavaScript Editor */}
        <div className="md:w-1/3">
          <Box
            lang="JS"
            value={js}
            onChange={updateJs}
            logo={
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" fill="#ffffff">
                <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
              </svg>
            }
          />
        </div>
      </div>

      {/* Bottom Section: Output */}
      <div className="flex-1 bg-gray-100 p-4 ">
        <Output html={html} css={css} js={js} />
      </div>
    </div>
  );
}

export default CodeEditor;

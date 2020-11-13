'use strict';
// Select the H1
const heading = document.querySelector('h1');
// Basic function
const genHex = () => {
    // Generate random hex value
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    const color = '#' + randomHex;
    // set the background of the body element to that hex value
    document.body.style.backgroundColor = color;
    // color goes in the h1
    heading.textContent = color.toUpperCase();
}
genHex();
#! /usr/bin/env nix-shell
/*
 * This is magic:
 *
#! nix-shell -i graffiti/bin/graffiti
 *
 */

// And this is Graffiti, a DOM without a browser:

const container = document.body.appendChild(document.createElement('div'))
container.style.padding = '100px'

const heading = container.appendChild(document.createElement('h1'))
heading.textContent = 'Hello world!'

const time = container.appendChild(document.createElement('span'))
setInterval( // update periodically
  () => time.textContent = `
The time is now ${new Date().toLocaleTimeString()}
 and the source code of this program is:`,
  100)

const src = container.appendChild(document.createElement('div'))
src.textContent = require('fs').readFileSync(__filename, 'utf8')

#! /usr/bin/env nix-shell
/* Obligatory magic line:
#! nix-shell -i graffiti/bin/graffiti

/*
 *  DOM APIs are a little too verbose for many people's liking.
 *  Let's lay the foundations of our own little "framework".
 */

const {appendTo, el, every, extend} = require('./03-framework.js')

/*
 *  The example then becomes:
 */

const [container] = appendTo(document.body)(
  extend(el('div'), { style: { padding: '100px' } }))

const [heading, time, src] = appendTo(container)(
  extend(el('h1'), { textContent: 'Hello' }),
  el('span'),
  el('div'))
src.textContent = require('fs').readFileSync(__filename, 'utf8')

// update periodically
every(100)(() => time.textContent = `
Hello world! The time is now ${new Date().toLocaleTimeString()}
 and the source code of this program is:`)

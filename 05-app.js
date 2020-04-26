#! /usr/bin/env nix-shell
/* Obligatory magic line:
#! nix-shell -i graffiti/bin/graffiti

/*
 *  How about building something useful:
 */

const {appendTo, el, every, extend} = require('./03-framework.js')

const [
  header,
  content
] = appendTo(document.body)(
  extend(el(), { style: { padding: '100px', backgroundColor: '#234' } }),
  extend(el(), { style: { padding: '50px', backgroundColor: '#678' } })
)

const [
  updatePackagesButton,
  updateOptionsButton
] = appendTo(header)(
  extend(el('button'), { margin: '10px', textContent: 'Update packages [up]', onclick: updatePackages }),
  extend(el('button'), { margin: '10px', textContent: 'Update options  [uo]', onclick: updateOptions  })
)

function updatePackages () {
  console.log('updatePackages')
}

function updateOptions () {
  console.log('updateOptions')
}

const [
  packagesTree,
  optionsTree
] = appendTo(content)(
  extend(el(), { textContent: 'Packages tree' }),
  extend(el(), { textContent: 'Options tree'  })
)

#! /usr/bin/env nix-shell
/* Obligatory magic line:
#! nix-shell -i graffiti/bin/graffiti
*/

const {appendTo, el, every, extend} = require('./03-framework.js')

const [
  header,
  content
] = appendTo(document.body)(
  el('div', { style: { padding: '10px', backgroundColor: '#234' } }),
  el('div', { style: { padding: '10px', backgroundColor: '#678' } })
)

const [
  updatePackagesButton,
  updateOptionsButton
] = appendTo(header)(
  el('button', { margin: '10px', textContent: 'Update packages [up]', onclick: updatePackages }),
  el('button', { margin: '10px', textContent: 'Update options  [uo]', onclick: updateOptions  })
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
  el('div', { textContent: 'Packages tree', style: { overflow: 'hidden', width: '50%', padding: '10px', backgroundColor: '#ffffffaa' } }),
  el('div', { textContent: 'Options tree',  style: { width: '50%', padding: '10px', backgroundColor: '#000000aa' } })
)

;(function addTree (element, data) {
  const style = { paddingLeft: '10px', whiteSpace: 'nowrap' }
  for (let [key, value] of Object.entries(data)) {
    const [node] = appendTo(element)(el('div', { style }))
    if (typeof value === 'string') {
      node.textContent = `${key}=${value}`
    } else {
      node.textContent = `${key}`
      addTree(node, value)
    }
  }
})(packagesTree, require('./nix-packages.json'))

const maxBuffer = Infinity

const {exec} = require('child_process')
const {writeFileSync:write} = require('fs')

if (require.main === module) {
  listAllPackages()
    .then(buildPackageTree)
    .then(tree=>write('nix-packages.json', JSON.stringify(tree, null, 2), 'utf8'))
}

module.exports = {
  run,
  listAllPackages,
  buildPackageTree
}

function run (command) {
  return new Promise((resolve, reject)=>
    require('child_process').exec(command, {maxBuffer}, (err, stdout)=>
      err?reject(err):resolve(stdout)))
}

function listAllPackages () {
  return run('nix-env -qaP')
    .then(data=>data.split('\n').map(line=>line.split(/ +/)))
}

function buildPackageTree (packages) {
  const tree = {}
  for (let [attribute, derivation] of packages) {
    let current = tree
    const path = attribute.split('.')
    for (let fragment of path.slice(0, -1)) {
      current[fragment] = current[fragment] || {}
      current = current[fragment]
    }
    current[path[path.length-1]] = derivation
  }
  return tree
}

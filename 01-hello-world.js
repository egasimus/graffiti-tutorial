#! /usr/bin/env nix-shell
/* the following line will be parsed by nix-shell:
#! nix-shell -i graffiti/bin/graffiti
*/
document.body.appendChild(
  Object.assign(document.createElement('h1'), {
    style: 'background:green',
    textContent: 'Hello Graffiti!'
  }))

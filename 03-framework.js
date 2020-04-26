// This file is not meant to be executable.
// It's just a library of helper functions to improve ergonomics.
// Feel free to use it in your future DOM-related activities.
const appendTo = x => (...y) => y.map(z=>x.appendChild(z))
const el = (x='div') => document.createElement(x)
const every = x => y => setInterval(y, x)
const extend = (x, y={}) => {
  for (let i in y) {
    if (y[i] instanceof Array)  extend(x[i]=x[i]||[], y[i]); else
    if (y[i] instanceof Object) extend(x[i]=x[i]||{}, y[i]); else
    x[i] = y[i]
  }
  return x
}
module.exports = {appendTo, el, every, extend}

// @flow

const linter = require('./linter')

linter.verify({
  title: 'units',

  valid: [
    ' border-width: 1px; ',
    ' border: 1px; ',
    ' border-radius: 1rem; ',
    ' border-radius: 1em; ',
    ' border-radius: 1%; ',
    ' border-top-left-radius: 1rem; ',
    ' border-top-left-radius: 1em; ',
    ' border-top-left-radius: 1%; ',
    ' transform: translate(10rem, 10%) rotate(10deg) scale(0.5, 2); ',
    ' letter-spacing: 1rem; ',
    ' letter-spacing: 1em; ',
    ' transition-duration: 200ms; ',
    ' transition-duration: 2s; ',
    ' line-height: 1em; ',
    ' line-height: 1rem; ',
    ' line-height: 1vw; ',
  ],

  invalid: [
    ' border-width: 1rem; ',
    ' border: 1rem; ',
    ' border-width: 1em; ',
    ' border: 1em; ',
    ' border-width: 1%; ',
    ' border: 1%; ',
    ' border-radius: 1px; ',
    ' border-top-left-radius: 1px; ',

    ' transform: translate(10rem, 10px); ',
    ' letter-spacing: 1px; ',
    ' width: 1px ',
    ' height: 1px ',
    ' margin: 1px ',
    ' padding: 1px ',
    ' font-size: 1px ',
    ' line-height: 1px ',
  ],
})

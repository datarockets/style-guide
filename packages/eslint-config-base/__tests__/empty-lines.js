// @flow

const linter = require('./linter')

linter.verify({
  title: 'empty-lines',

  valid: [
    // BOF/EOF
    ' const BOF_EOF_1 = true\n ',
    `
      const one = 'string'

      const two = 'string'
    `,

    // Return
    `
      function name() {
        return true
      }
    `,
    `
      function name() {
        const result = true

        return result
      }
    `,

    // Import
    `
      import one from './test1'
      import two from './test2'

      import three from './test3'

      one + two
    `,

    // Class declaration, If, Do/While, Switch, Try
    `
      const before = 'text'

      if (1 === null) {}

      const next = 'text'
    `,

    // Sequence of variable declarations and export
    `
      export const VAR_1 = 'one'

      export const VAR_2 = 'two'

      export default 'text'
    `,
    `
      const test = 'text'

      export default test
    `,

    // Case/Default
    `
      switch ('test') {
      case 'zero':
        false
        break

      case 'one':
      case 'two':
        true
        break

      default:
        false
      }
    `,

    // Class
    `
      class MyClass {
        methodA() {}

        methodB() {}

        propertyA = () => {}

        propertyB = () => {}
      }
    `,
  ],

  invalid: [
    // BOF/EOF
    ' \nconst BOF_EOF_1 = true ',
    ' \n\nconst BOF_EOF_2 = true ',
    ' const BOF_EOF_4 = true\n\n ',
    ' const BOF_EOF_5 = true\n\n\nconst BOF_EOF_6 = true ',
    ' const BOF_EOF_7 = true\n\n\n\nconst BOF_EOF_8 = true ',

    // Return
    `
      function name() {
        const result = true
        return result
      }
    `,

    // Import
    `
      import two from './test2.js'
      two()
    `,

    // Class declaration, If, Do/While, Switch, Try
    `
      const before = 'text'
      if (1 === null) {}
    `,
    `
      if (1 === null) {}
      const next = 'text'
    `,

    // Sequence of variable declarations and export
    `
      const exec = (a, b) => a + b
      const one = true
      const two = true
      exec(one, two)
    `,
    `
      const test = 'text'
      export default test
    `,

    // Case/Default
    `
      switch ('test') {
      case 'asd':
        'one'
        break
      default:
        'two'
      }
    `,

    // Class
    `
      class MyClass {
        methodA() {}
        methodB() {}
      }
    `,
    `
      class MyClass {
        propertyA = () => {}
        propertyB = () => {}
      }
    `,
    `
      class MyClass {
        property = () => {}
        method() {}
      }
    `,
    `
      class MyClass {
        method() {}
        property = () => {}
      }
    `,

  ],
})

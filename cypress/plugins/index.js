/*eslint-disable */
// "cypress-cucumber-preprocessor" follows module/require style loading, so ignore lint

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

/*eslint-enable */

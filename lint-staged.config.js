module.exports = {
  '*.js': files => {
    // from `files` filter those _NOT_ matching `*test.js`
    const match = micromatch.not(files, '*test.js')
    return `eslint ${match.join(' ')}`
  }
}
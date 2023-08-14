// module.exports = {
//     coverageReporters: ["text", "clover"]
//   };

module.exports = {
    // ...other Jest configurations
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'babel-jest'
    },
  };
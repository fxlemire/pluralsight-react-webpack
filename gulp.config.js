const client = './src/client/';

module.exports = {
  build: './public/',
  client,
  js: {
    all: `${client}**/*.js?(x)`,
    react: `${client}**/*.jsx`,
    plain: `${client}**/*.js`
  },
  sass: `${client}**/*.s+(a|c)ss`
};

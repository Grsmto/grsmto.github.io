module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': ['eslint:recommended', 'prettier'],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'import',
        'react',
        'jsx-a11y'
    ],
    rules: {
      'arrow-body-style': [0],
      'arrow-parens': [0],
      'class-methods-use-this': [0],
      'comma-dangle': ['error', 'never'],
      'global-require': [0],
      'import/no-dynamic-require': [0],
      'import/prefer-default-export': [0],
      'jsx-a11y/no-static-element-interactions': [0],
      'max-len': [0],
      'no-plusplus': [0],
      radix: [0],
      'react/forbid-prop-types': [0],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx']
        }
      ],
      'react/jsx-no-bind': [0],
      'react/no-danger': [0],
      'react/prop-types': [0],
      'react/react-in-jsx-scope': [0],
      'react/style-prop-object': [0],
      'react/jsx-wrap-multilines': [0]
    }
};

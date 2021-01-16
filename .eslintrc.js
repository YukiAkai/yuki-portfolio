// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
      avoidExplicitReturnArrows: true
    }],
    'prefer-const': ['warn', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-useless-constructor': 0,  // bookmanagerで、interfaceのconstrutorだけを実行している
    'promise/param-names': 'off',  // bookmanagerで、promiseを含むpromiseをreturnする場合がある
    'template-curly-spacing': 'off', // babel-eslintの更新で"TypeError: Cannot read property 'range' of null from template-curly-spacing"が発生するのでその対応

    //修正マスト
    'vue/this-in-template': 'off',
    'vue/html-quotes': 'off', //rapidKeyだけシングルなの理由が謎
    'vue/return-in-computed-property': 'off',
    'vue/valid-v-for': 'off',

    //早めに直したい
    'vue/no-reserved-keys': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/attribute-hyphenation': 'off',

    //直した方がいいけどどっちでもいい
    'no-tabs': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/order-in-components': 'off',
    'vue/name-property-casing': 'off',
    'vue/max-attributes-per-line': 'off', //1行あたりの属性の最大数を強制する
    'vue/multiline-html-element-content-newline': 'off', //複数行要素の内容の前後に改行が必要
    'vue/valid-template-root': 'off',
    'vue/no-unused-vars': 'off',

    //直さなくてもいい
    'vue/no-unused-components': 'off',
    'no-trailing-spaces': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off', //単一行要素の内容の前後に改行が必要

    //offにしとかないと無理だと思う
    'no-irregular-whitespace': 'off',
    'vue/no-v-html': 'off',
  }
}

module.exports = {
    root: true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures":  {
        "jsx":  true,
        "tsx": true,
        "ts": true
      }
    },
    "env": {
      "es6": true,
      "jest": true,
      "node": true,
      "browser": true,
      "shared-node-browser": true,
      "react-native/react-native": true
    },
    "globals": {
      "it": "readonly",
      "Package": "readonly",
      "Accounts": "readonly",
      "__meteor_runtime_config__": "readonly"
    },
    "plugins": [
      "json",
      "react",
      "detox",
      "import",
      "redux-saga",
      "react-hooks",
      "react-native",
      "@typescript-eslint"
    ],
    "extends": [
      // "@react-native-community",
      // "eslint:recommended",
      // "plugin:@typescript-eslint/eslint-recommended",
      // "plugin:@typescript-eslint/recommended",
      // "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      "react-native/no-unused-styles": 2,
      // "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-native/no-raw-text": [
        "error",
        {
          "skip": [
            "Button",
            "Link",
            "NButton",
            "Animated.Text"
          ]
        }
      ],
      // Reference: http://eslint.org/docs/rules/prefer-const.html
      // Suggest using of const declaration for variables that are never modified after declared
      "prefer-const": [
        "error",
        {
          "destructuring": "any",
          "ignoreReadBeforeAssign": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-const-assign.html
      // Disallow modifying variables that are declared using const
      "no-const-assign": "error",
      // Reference: http://eslint.org/docs/rules/no-var.html
      // Require let or const instead of var
      "no-var": "error",
      // Reference: http://eslint.org/docs/rules/no-new-object.html
      // Disallow Object constructors
      "no-new-object": "error",
      // Reference: https://eslint.org/docs/rules/no-trailing-spaces
      // Disallow trailing whitespace at the end of line
      "no-trailing-spaces": [
        "error"
      ],
      // Reference: http://eslint.org/docs/rules/object-shorthand.html
      // Require method and property shorthand syntax for object literals
      "object-shorthand": [
        "error",
        "always",
        {
          "ignoreConstructors": false,
          "avoidQuotes": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/quote-props.html
      // Require quotes around object literal property names
      "quote-props": [
        "error",
        "as-needed",
        {
          "keywords": false,
          "unnecessary": true,
          "numbers": false
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-array-constructor.html
      // Disallow use of the Array constructor
      "no-array-constructor": "error",
      // Reference: http://eslint.org/docs/rules/array-callback-return
      // Enforces return statements in callbacks of array's methods
      "array-callback-return": "error",
      // Reference: http://eslint.org/docs/rules/quotes.html
      // Specify whether single quotes should be used
      "quotes": [
        "error",
        "single"
      ],
      // Reference: http://eslint.org/docs/rules/prefer-template.html
      // Suggest using template literals instead of string concatenation
      "prefer-template": "error",
      // Reference: http://eslint.org/docs/rules/template-curly-spacing
      // Enforce usage of spacing in template strings
      "template-curly-spacing": "error",
      // Reference: http://eslint.org/docs/rules/no-eval
      // Disallow use of eval()
      "no-eval": "error",
      // Reference: http://eslint.org/docs/rules/no-useless-escape
      // Disallow unnecessary string escaping
      // "no-useless-escape": "error",
      // Reference: http://eslint.org/docs/rules/no-loop-func.html
      // Disallow creation of functions within loops
      "no-loop-func": "error",
      // Reference: http://eslint.org/docs/rules/prefer-rest-params
      // Use rest parameters instead of arguments
      "prefer-rest-params": "error",
      // Reference: http://eslint.org/docs/rules/no-new-func
      // Disallow use of new operator for Function object
      "no-new-func": "error",
      // Reference: http://eslint.org/docs/rules/space-before-function-paren
      // Require or disallow space before function opening parenthesis
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always"
        }
      ],
      // Reference: http://eslint.org/docs/rules/space-before-blocks
      // Require or disallow space before blocks
      "space-before-blocks": "error",
      // Reference: http://eslint.org/docs/rules/no-param-reassign.html
      // Disallow reassignment of function parameters
      // Disallow parameter object manipulation except for specific exclusions
      "no-param-reassign": [
        "error",
        {
          "props": true,
          "ignorePropertyModificationsFor": [
            "acc", // for reduce accumulators
            "e", // for e.returnvalue
            "ctx", // for Koa routing
            "req", // for Express requests
            "request", // for Express requests
            "res", // for Express responses
            "response", // for Express responses
            "$scope" // for Angular 1 scopes
          ]
        }
      ],
      // Reference: http://eslint.org/docs/rules/prefer-spread
      // Suggest using the spread operator instead of .apply()
      "prefer-spread": "error",
      // Reference: http://eslint.org/docs/rules/prefer-arrow-callback.html
      // Suggest using arrow functions as callbacks
      "prefer-arrow-callback": [
        "error",
        {
          "allowNamedFunctions": false,
          "allowUnboundThis": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/arrow-spacing.html
      // Require space before/after arrow function's arrow
      "arrow-spacing": [
        "error",
        {
          "before": true,
          "after": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/arrow-parens.html
      // Require parens in arrow function arguments
      "arrow-parens": [
        "error",
        "as-needed",
        {
          "requireForBlockBody": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/arrow-body-style.html
      // Enforces no braces where they can be omitted
      "arrow-body-style": [
        "error",
        "as-needed",
        {
          "requireReturnForObjectLiteral": false
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-confusing-arrow
      // Disallow arrow functions where they could be confused with comparisons
      "no-confusing-arrow": [
        "error",
        {
          "allowParens": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-useless-constructor
      // Disallow unnecessary constructor
      "no-useless-constructor": "error",
      // Reference: http://eslint.org/docs/rules/no-dupe-class-members
      // Disallow duplicate class members
      "no-dupe-class-members": "error",
      // Reference: http://eslint.org/docs/rules/no-duplicate-imports
      // Disallow importing from the same path more than once
      "no-duplicate-imports": "off",
      // Reference: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
      // Forbid mutable exports
      "import/no-mutable-exports": "error",
      // Reference: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
      // Require modules with a single export to use a default export
      // "import/prefer-default-export": "error",
      // Reference: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
      // Disallow non-import statements appearing before import statements
      // "import/first": [
      //   "error",
      //   "absolute-first"
      // ],
      // Reference: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
      // Enforce a convention in module import order
      "import/order": 0,
      // {
      //   "groups": [
      //     "builtin", // Built-in types are first
      //     ["sibling", "parent"], // Then sibling and parent types. They can be mingled together
      //     "index", // Then the index file
      //     // Then the rest: internal and external type
      //   ]
      // },
      // Reference: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
      // Forbid Webpack loader syntax in imports
      "import/no-webpack-loader-syntax": "error",
      // Reference: http://eslint.org/docs/rules/no-iterator.html
      // Disallow usage of __iterator__ property
      "no-iterator": "error",
      // Reference: https://github.com/pke/eslint-plugin-redux-saga/blob/develop/docs/rules/yield-effects.md
      // Ensures effects are yielded
      "redux-saga/yield-effects": "error",
      // Reference: https://github.com/pke/eslint-plugin-redux-saga/blob/develop/docs/rules/no-yield-in-race.md
      // Prevent usage of yield in race entries
      "redux-saga/no-yield-in-race": "error",
      // Reference: http://eslint.org/docs/rules/no-restricted-syntax
      // Disallow certain syntax forms
      "no-restricted-syntax": [
        "error",
        {
          "selector": "ForInStatement",
          "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
        },
        {
          "selector": "ForOfStatement",
          "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
        },
        {
          "selector": "LabeledStatement",
          "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
        },
        {
          "selector": "WithStatement",
          "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
        }
      ],
      // Reference: http://eslint.org/docs/rules/dot-notation.html
      // Encourages use of dot notation whenever possible
      "dot-notation": [
        "error",
        {
          "allowKeywords": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-undef
      // Disallow use of undeclared variables unless mentioned in a /*global */ block
      "no-undef": "error",
      // Reference: http://eslint.org/docs/rules/one-var.html
      // Allow just one var statement per function
      "one-var": [
        "error",
        "never"
      ],
      // Reference: http://eslint.org/docs/rules/eqeqeq.html
      // require the use of === and !==
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-case-declarations.html
      // Disallow lexical declarations in case/default clauses
      "no-case-declarations": "error",
      // Reference: http://eslint.org/docs/rules/no-nested-ternary.html
      // Disallow nested ternary expressions
      // "no-nested-ternary": "error",
      // Reference: http://eslint.org/docs/rules/no-unneeded-ternary.html
      // Disallow the use of Boolean literals in conditional expressions
      // also, prefer `a || b` over `a ? a : b`
      "no-unneeded-ternary": [
        "error",
        {
          "defaultAssignment": false
        }
      ],
      // Reference: https://eslint.org/docs/rules/curly
      // Require Following Curly Brace Conventions (curly)
      "curly": [
        "error",
        "all"
      ],
      // Reference: http://eslint.org/docs/rules/brace-style.html
      // Enforce one true brace style
      "brace-style": [
        "error",
        "1tbs",
        {
          "allowSingleLine": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/spaced-comment
      // Require or disallow a space immediately following the // or /* in a comment
      "spaced-comment": [
        "error",
        "always",
        {
          "line": {
            "exceptions": [
              "-",
              "+"
            ],
            "markers": [
              "=",
              "!"
            ] // space here to support sprockets directives
          },
          "block": {
            "exceptions": [
              "-",
              "+"
            ],
            "markers": [
              "=",
              "!"
            ], // space here to support sprockets directives
            "balanced": false
          }
        }
      ],
      // Reference: http://eslint.org/docs/rules/indent.html
      // This option sets a specific tab width for your code
      "@typescript-eslint/indent": [
        "error",
        4,
        {
          "SwitchCase": 1,
          "VariableDeclarator": 1,
          "outerIIFEBody": 1,
          "FunctionDeclaration": {
            "parameters": 1,
            "body": 1
          },
          "ignoredNodes": ["ConditionalExpression"],
          "FunctionExpression": {
            "parameters": 1,
            "body": 1
          }
        }
      ],
      // Reference: http://eslint.org/docs/rules/keyword-spacing.html
      // Require a space before & after certain keywords
      "keyword-spacing": [
        "error",
        {
          "before": true,
          "after": true,
          "overrides": {
            "return": {
              "after": true
            },
            "throw": {
              "after": true
            },
            "case": {
              "after": true
            },
            "switch": {
              "after": false
            },
            "while": {
              "after": false
            },
            "catch": {
              "after": false
            }
          }
        }
      ],
      // Reference: http://eslint.org/docs/rules/space-infix-ops.html
      // Require spaces around operators
      "space-infix-ops": "error",
      // Reference: https://eslint.org/docs/rules/eol-last
      // Enforces at least one newline at the end of non-empty files
      "eol-last": "error",
      // Reference: https://eslint.org/docs/rules/no-multiple-empty-lines
      // Enforces a maximum number of consecutive empty lines
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 2,
          "maxEOF": 0
        }
      ],
      // Reference: http://eslint.org/docs/rules/newline-per-chained-call
      // Enforces new line after each method call in the chain to make it
      // More readable and easy to maintain
      "newline-per-chained-call": [
        "error",
        {
          "ignoreChainWithDepth": 4
        }
      ],
      // Reference: http://eslint.org/docs/rules/padded-blocks.html
      // Enforce padding within blocks
      "padded-blocks": [
        "error",
        "never"
      ],
      // Reference: http://eslint.org/docs/rules/array-bracket-spacing.html
      // Enforce spacing inside array brackets
      "array-bracket-spacing": [
        "error",
        "never",
        {
          "singleValue": true,
          "arraysInArrays": false,
          "objectsInArrays": false
        }
      ],
      // Reference: http://eslint.org/docs/rules/object-curly-spacing.html
      // Require padding inside curly braces
      "object-curly-spacing": [
        "error",
        "always"
      ],
      // Reference: http://eslint.org/docs/rules/max-len.html
      // Specify the maximum length of a line in your program
      "max-len": [
        "error",
        120,
        2,
        {
          "ignoreUrls": true,
          "ignoreComments": false,
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true
        }
      ],
      // Reference: http://eslint.org/docs/rules/semi.html
      // Require or disallow use of semicolons instead of ASI
      "semi": [
        "error",
        "always"
      ],
      // Reference: http://eslint.org/docs/rules/radix
      // Require use of the second argument for parseInt()
      "radix": "error",
      // Reference: http://eslint.org/docs/rules/id-length
      // This option enforces minimum and maximum identifier lengths
      // (variable names, property names etc.)
      "id-length": "off",
      // Reference: http://eslint.org/docs/rules/camelcase.html
      // Require camel case names
      "camelcase": [
        "error",
        {
          "allow": [
            "eDraft",
            "eChannel",
            "eCHANNELS",
            "eCHANNEL",
            "eMessage",
            "eFile",
            "eSafeLink",
            "eFolder",
            "unsafe",
            "_eSSK",
            "ObjC_",
            "_uri",
            "field_not_presented",
            "__meteor_runtime_config__",
            "_eKeys"
          ]
        }
      ],
      // Reference: http://eslint.org/docs/rules/new-cap.html
      // Require a capital letter for constructors
      "new-cap": [
        "error",
        {
          "newIsCap": true,
          "newIsCapExceptions": [],
          "capIsNew": false,
          "capIsNewExceptions": [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List"
          ]
        }
      ],
      // Reference: http://eslint.org/docs/rules/no-underscore-dangle.html
      // Disallow dangling underscores in identifiers
      // "no-underscore-dangle": [
      //   "error",
      //   {
      //     "allowAfterThis": false
      //   }
      // ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless
      // Prevent multiple component definition per file
      "react/no-multi-comp": [
        "error",
        {
          "ignoreStateless": true
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
      // Require ES6 class declarations over React.createClass
      "react/prefer-es6-class": [
        "error",
        "always"
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
      // Require stateless functions when not using lifecycle methods, setState or ref
      // "react/prefer-stateless-function": [
      //   "error",
      //   {
      //     "ignorePureComponents": true
      //   }
      // ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      // Enforce PascalCase for user-defined JSX components
      "react/jsx-pascal-case": [
        "error",
        {
          "allowAllCaps": true,
          "ignore": []
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
      // Validate closing bracket location in JSX
      "react/jsx-closing-bracket-location": [
        "error",
        "line-aligned"
      ],
      // Reference: http://eslint.org/docs/rules/jsx-quotes
      // Specify whether double or single quotes should be used in JSX attributes
      "jsx-quotes": [
        "error",
        "prefer-double"
      ],
      // Reference: http://eslint.org/docs/rules/no-multi-spaces
      // Disallow use of multiple spaces
      "no-multi-spaces": "error",
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
      // Validate whitespace in and around the JSX opening and closing brackets
      "react/jsx-tag-spacing": [
        "error",
        {
          "closingSlash": "never",
          "beforeSelfClosing": "always",
          "afterOpening": "never"
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
      // Enforce or disallow spaces inside of curly braces in JSX attributes
      "react/jsx-curly-spacing": [
        "error",
        "never",
        {
          "allowMultiline": true
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      // Enforce boolean attributes notation in JSX
      "react/jsx-boolean-value": [
        "error",
        "never"
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
      // Prevent using string references
      // "react/no-string-refs": "error",
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
      // Prevent missing parentheses around multilines JSX
      "react/jsx-wrap-multilines": [
        "error",
        {
          "declaration": true,
          "assignment": true,
          "return": true,
          "arrow": true
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      // Prevent extra closing tags for components without children
      "react/self-closing-comp": "error",
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
      // Prevent usage of .bind() in JSX props
      "react/jsx-no-bind": [
        "error",
        {
          "ignoreRefs": true,
          "allowArrowFunctions": true,
          "allowBind": false
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
      // Require render() methods to return something
      "react/require-render-return": "error",
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      // Enforce component methods order
      "react/sort-comp": [
        "error",
        {
          "order": [
            "static-methods", // static class methods
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "lifecycle",
            "keyboard-lifecycle",
            "debounce",
            "everything-else", // special group which match everything which does not much other groups
            "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
            "/^(handle)(?!(.*Ref)).+$/",
            "/^on.+$/",
            "/^render.+$/",
            "/^(handle)(.*Ref).*$/",
            "render"
          ],
          "groups": {
            "lifecycle": [
              "getDerivedStateFromProps",
              "componentWillMount",
              "UNSAFE_componentWillMount",
              "componentDidMount",
              "componentWillUnmount",
  
              "componentDidAppear",
              "componentDidDisappear",
  
              "componentWillReceiveProps",
              "UNSAFE_componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "UNSAFE_componentWillUpdate",
              "getSnapshotBeforeUpdate",
              "componentDidUpdate",
              "componentDidCatch"
            ],
            "keyboard-lifecycle": [
              "keyboardWillShow",
              "keyboardWillHide"
            ]
          }
        }
      ],
      // Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
      // Prevent usage of isMounted
      "react/no-is-mounted": "error",
      "react/prop-types": "error"
    }
};

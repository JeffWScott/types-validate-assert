# types-validate-assert
A simple helper library I built to validate values of variables in JavaScript.  I built this for situations that need a more flexible solution than simply throwing assertion errors (but it can do that too).

I wanted a set human readable methods to prevent the need for "type of value === 'undefined'" all over my code.
I also wanted to test all of these situations once instead of having to test these situations in every function or class.

This library allows you to:
- use assert to throw Errors on invalid types
- use validate to make decisions on different types
- check if a string, array, object is of that type AND not empty
- check if an object is of a certain class

validatable/assertable types:
- String 
- Hex String
- Number
- Interger
- Object
- RegEx
- Function
- Boolean
- Array

further validations/assertions
- Is a String with a Value
- Is an Object with keys
- Is an Object with specific keys
- Is an Array with values
- Object is of a specific class


## install

```
npm install types-validate-assert
```

## add to project

```
import validators from 'types-validate-assert'
const { validateTypes, assertTypes } = validators; 
```

## use

validate a type (returns true/false)
```
validateTypes.isString('This is a string') // true
validateTypes.isString({string: 'This is a string'}) // false
```
assert a type (returns true/TypeError)
```
assertTypes.isString('This is a string') // true
assertTypes.isString({string: 'This is a string'}) // TypeError: Expected type [object String] but got [object Object]
```

## methods
Method | validateTypes | assertTypes | Assert Error
--- | --- | --- | ---
isString (any) | yes | yes | TypeError: Expected type [object String] but got 'actual value'
isObject (any) | yes | yes | TypeError: Expected type [object Object] but got 'actual value'
isFunction (any) | yes | yes | TypeError: Expected type [object Function] but got 'actual value'
isBoolean (any) | yes | yes | TypeError: Expected type [object Boolean] but got 'actual value'
isArray (any) | yes | yes | TypeError: Expected type [object Array] but got 'actual value'
isNumber (any) | yes | yes | TypeError: Expected type [object Number] but got 'actual value'
isInteger (any) | yes | yes | TypeError: Expected 'value' to be an integer but got non-integer value
isRegEx (any) | yes | yes | TypeError: Expected type [object RegExp] but got 'actual value'
isStringHex (any) | yes | yes | TypeError: Expected 'value' to be hex but got non-hex value
hasKeys (any, [string array]) | yes | yes | TypeError: Provided object does not contain all keys 'key list'
isStringWithValue (any) | yes | yes | TypeError: Expected 'value' to be [object String] and not empty
isObjectWithKeys (any) | yes | yes | TypeError: Expected 'value' to be [object Object] and have keys
isArrayWithValues (any) | yes | yes | TypeError: Expected 'value' to be [object Array] and not empty
isSpecificClass (any, string) | yes | yes | TypeError: Expected Object Class Name to be 'className' but got 'actual class name'
getType (any) | yes | no | 
getClassName (any) | yes | no |
const expect = require('expect.js');
const typeValidations = require('../dist/index');
const { validateTypes } = typeValidations; 

function testFunction(){}
const address = '270add00fc708791c97aeb5255107c770434bd2ab71c2e103fbee75e202aa15e'

class TestClass1{}
const testClass1 = new TestClass1;
class TestClass2{}
const testClass2 = new TestClass2;


const testValues = [
    undefined, null, 
    [], ['test'], 
    {}, {test:''}, 
    true, false,
    '', 'test', address,
    0.01, 50,
    testFunction,
    testClass1, testClass2,
    /ab+c/
]

const testTypes = [
    '[object Undefined]','[object Null]',
    '[object Array]','[object Array]',
    '[object Object]','[object Object]',
    '[object Boolean]','[object Boolean]',
    '[object String]','[object String]','[object String]',
    '[object Number]','[object Number]',
    '[object Function]',
    '[object Object]','[object Object]',
    '[object RegExp]'
]

const testClassNames = [
    '[object Undefined]','[object Null]',
    'Array','Array',
    'Object','Object',
    'Boolean','Boolean',
    'String','String','String',
    'Number','Number',
    'Function',
    'TestClass1','TestClass2',
    'RegExp'
]

function jsonStr(value){
    return JSON.stringify(value)
}

describe('Test Validate Types', () => {
    context('getType', () => {
        it('correctly identifies types', () => {
            testValues.forEach((value, index) => { 
                let result = validateTypes.getType(value)
                expect(result).to.be(testTypes[index])
            })
        })
    })
    context('getClassNames', () => {
        it('correctly identifies Class Names', () => {
            testValues.forEach((value, index) => { 
                let result = validateTypes.getClassName(value)
                expect(result).to.be(testClassNames[index])
            })
        })
    })
    context('hasKeys', () => {
        it('can validate a list of keys exist in an object', () => {
            let test1 = {foo:'', bar:'', stu:''}
            expect(validateTypes.hasKeys(test1, ['foo', 'bar', 'stu'])).to.be(true)
            expect(validateTypes.hasKeys(test1, ['foo', 'bar', 'stu', 'lamden'])).to.be(false)
        })
    })
    context('isObject', () => {
        it('can determine an Object is an Object', () => {
            testValues.map(value => { 
                let result = validateTypes.isObject(value)
                if ([jsonStr({}), jsonStr({test:''})].includes(jsonStr(value)) && value != '/ab+c/') {
                    expect(result).to.be(true)
                }
                else expect(result).to.be(false)
            })
        })
    })

    context('isFunction', () => {
        it('can determine an Object is a Function', () => {
            testValues.map(value => { 
                let result = validateTypes.isFunction(value)
                if ([testFunction].includes(value)) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })

    context('isString', () => {
        it('can determine a String is a String', () => {
            testValues.map(value => { 
                let result = validateTypes.isString(value)
                if (['', 'test', address].includes(value)) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })

    context('isBoolean', () => {
        it('can determine a Boolean is a Boolean', () => {
            testValues.map(value => { 
                let result = validateTypes.isBoolean(value)
                if ([true, false].includes(value)) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })
    context('isArray', () => {
        it('can determine a Array is a Array', () => {
            testValues.map(value => { 
                let result = validateTypes.isArray(value)
                if (['[]', jsonStr(['test'])].includes(jsonStr(value))) {
                    expect(result).to.be(true)
                }
                else expect(result).to.be(false)
            })
        })
    })
    context('isNumber', () => {
        it('can determine a Number is a Number', () => {
            testValues.map(value => { 
                let result = validateTypes.isNumber(value)
                if ([50, 0.01].includes(value)) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })
    context('isInteger', () => {
        it('can determine a Number is an Integer', () => {
            testValues.map(value => { 
                let result = validateTypes.isInteger(value)
                if ([50].includes(value)) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })
    context('isRegEx', () => {
        it('can determine RegEx', () => {
            testValues.map(value => { 
                let result = validateTypes.isRegEx(value)
                if (value == '/ab+c/') expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })
    context('isStringHex', () => {
        it('can determine a String is Hex', () => {
            testValues.map(value => { 
                let result = validateTypes.isStringHex(value)
                if (value === address) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })
    context('isStringWithValue', () => {
        it('can determine a String is not empty', () => {
            testValues.map(value => { 
                let result = validateTypes.isStringWithValue(value)
                if (['test', address].includes(value)) expect(result).to.be(true)
                else expect(result).to.be(false)
            })
        })
    })
    context('isObjectWithKeys', () => {
        it('can determine an Object is not empty', () => {
            testValues.map(value => { 
                let result = validateTypes.isObjectWithKeys(value)
                if (jsonStr(value) === jsonStr({test:''})) {
                    expect(result).to.be(true)
                }
                else expect(result).to.be(false)
            })
        })
    })
    context('isArrayWithValues', () => {
        it('can determine an Array is not empty', () => {
            testValues.map(value => { 
                let result = validateTypes.isArrayWithValues(value)
                if (jsonStr(value) === jsonStr(['test'])) {
                    expect(result).to.be(true)
                }
                else expect(result).to.be(false)
            })
        })
    })
    context('isSpecificClass', () => {
        it('can determine if an object is of a specfic class', () => {
            testValues.map(value => { 
                let result = validateTypes.isSpecificClass(value, 'TestClass1')
                if (value === testClass1) {
                    expect(result).to.be(true)
                }
                else expect(result).to.be(false)
            })
        })
    })
})
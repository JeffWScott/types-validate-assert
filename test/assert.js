const expect = require('expect.js');
const typeValidations = require('../dist/index');
const { assertTypes } = typeValidations; 

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

describe('Test Aseert Types', () => {

    context('hasKeys', () => {
        it('can validate a list of keys exist in an object', () => {
            let test1 = {foo:'', bar:'', stu:''}
            let error = '';
                try{
                    assertTypes.hasKeys(test1, ['foo', 'bar', 'stu', 'lamden'])
                } catch (e){
                    error = e.message
                }
            expect(error).to.be(`Provided object does not contain all keys ["foo","bar","stu","lamden"]`)
            expect(assertTypes.hasKeys(test1, ['foo', 'bar', 'stu'])).to.be(true)
        })
    })
    context('isObject', () => {
        it('throws an error if a value is not an Object', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isObject(value)
                } catch (e){
                    error = e.message
                }
                 
                if ([jsonStr({}), jsonStr({test:''})].includes(jsonStr(value)) && value != '/ab+c/') {
                    expect(error).to.be('')
                }
                else expect(error).to.be(`Expected type [object Object] but got ${testTypes[index]}`)
            })
        })
    })

    context('isFunction', () => {
        it('can determine an Object is a Function', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isFunction(value)
                } catch (e){
                    error = e.message
                }
                if ([testFunction].includes(value)) expect(error).to.be('')
                else expect(error).to.be(`Expected type [object Function] but got ${testTypes[index]}`)
            })
        })
    })

    context('isString', () => {
        it('can determine a String is a String', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isString(value)
                } catch (e){
                    error = e.message
                }
                if (['', 'test', address].includes(value))  expect(error).to.be('')
                else expect(error).to.be(`Expected type [object String] but got ${testTypes[index]}`)
            })
        })
    })

    context('isBoolean', () => {
        it('can determine a Boolean is a Boolean', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isBoolean(value)
                } catch (e){
                    error = e.message
                }
                if ([true, false].includes(value)) expect(error).to.be('')
                else expect(error).to.be(`Expected type [object Boolean] but got ${testTypes[index]}`)
            })
        })
    })
    context('isArray', () => {
        it('can determine a Array is a Array', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isArray(value)
                } catch (e){
                    error = e.message
                }
                if (['[]', jsonStr(['test'])].includes(jsonStr(value))) {
                    expect(error).to.be('')
                }
                else expect(error).to.be(`Expected type [object Array] but got ${testTypes[index]}`)
            })
        })
    })
    context('isNumber', () => {
        it('can determine a Number is a Number', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isNumber(value)
                } catch (e){
                    error = e.message
                }
                if ([50, 0.01].includes(value)) expect(error).to.be('')
                else expect(error).to.be(`Expected type [object Number] but got ${testTypes[index]}`)
            })
        })
    })
    context('isInteger', () => {
        it('can determine a Number is an Integer', () => {
            testValues.forEach(value => {
                let error = '';
                try{
                    assertTypes.isInteger(value)
                } catch (e){
                    error = e.message
                }
                if ([50].includes(value)) expect(error).to.be('')
                else expect(error).to.be(`Expected "${value}" to be an integer but got non-integer value`)
            })
        })
    })
    context('isRegEx', () => {
        it('can determine RegEx', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isRegEx(value)
                } catch (e){
                    error = e.message
                }
                if (value == '/ab+c/') expect(error).to.be('')
                else expect(error).to.be(`Expected type [object RegExp] but got ${testTypes[index]}`)
            })
        })
    })
    context('isStringHex', () => {
        it('can determine a String is Hex', () => {
            testValues.forEach(value => {
                let error = '';
                try{
                    assertTypes.isStringHex(value)
                } catch (e){
                    error = e.message
                }
                if (value === address) expect(error).to.be('')
                else expect(error).to.be(`Expected "${value}" to be hex but got non-hex value`)
            })
        })
    })
    context('isStringWithValue', () => {
        it('can determine a String is not empty', () => {
            testValues.forEach(value => {
                let error = '';
                try{
                    assertTypes.isStringWithValue(value)
                } catch (e){
                    error = e.message
                }
                if (['test', address].includes(value)) expect(error).to.be('')
                else expect(error).to.be(`Expected "${value}" to be [object String] and not empty`)
            })
        })
    })
    context('isObjectWithKeys', () => {
        it('can determine an Object is not empty', () => {
            testValues.forEach(value => {
                let error = '';
                try{
                    assertTypes.isObjectWithKeys(value)
                } catch (e){
                    error = e.message
                }
                if (jsonStr(value) === jsonStr({test:''})) {
                    expect(error).to.be('')
                }
                else expect(error).to.be(`Expected "${value}" to be [object Object] and have keys`)
            })
        })
    })
    context('isArrayWithValues', () => {
        it('can determine an Array is not empty', () => {
            testValues.forEach(value => {
                let error = '';
                try{
                    assertTypes.isArrayWithValues(value)
                } catch (e){
                    error = e.message
                }
                if (jsonStr(value) === jsonStr(['test'])) {
                    expect(error).to.be('')
                }
                else expect(error).to.be(`Expected "${value}" to be [object Array] and not empty`)
            })
        })
    })
    context('isSpecificClass', () => {
        it('can determine if an object is of a specfic class', () => {
            testValues.forEach((value, index) => {
                let error = '';
                try{
                    assertTypes.isSpecificClass(value, 'TestClass1')
                } catch (e){
                    error = e.message
                }
                if (value === testClass1) expect(error).to.be('')
                else {
                    expect(error).to.be(`Expected Object Class to be "TestClass1" but got ${testClassNames[index]}`)
                }
            })
        })
    })
})
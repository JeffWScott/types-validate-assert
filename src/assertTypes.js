import { ValidateTypes } from './validateTypes'

export class AssertTypes extends ValidateTypes {
    constructor(){
        super()
    }
    //Validation functions
    hasKeys(value, keys){
        if(!super.hasKeys(value, keys)) {
            throw new TypeError(`Provided object does not contain all keys ${JSON.stringify(keys)}`)
        }
        return true;
    }
    isObject(value){
        if(!super.isObject(value)) {
            throw new TypeError(`Expected type [object Object] but got ${this.getType(value)}`)
        }
        return true;
    }
    isFunction(value){
        if(!super.isFunction(value)) {
            throw new TypeError(`Expected type [object Function] but got ${this.getType(value)}`)
        }
        return true;
    }
    isString(value){
        if(!super.isString(value)) {
            throw new TypeError(`Expected type [object String] but got ${this.getType(value)}`)
        }
        return true;
    }
    isBoolean(value){
        if(!super.isBoolean(value)) {
            throw new TypeError(`Expected type [object Boolean] but got ${this.getType(value)}`)
        }
        return true;
    }
    isArray(value){
        if(!super.isArray(value)) {
            throw new TypeError(`Expected type [object Array] but got ${this.getType(value)}`)
        }
        return true;
    }
    isNumber(value){
        if(!super.isNumber(value)) {
            throw new TypeError(`Expected type [object Number] but got ${this.getType(value)}`)
        }
        return true;
    }
    isInteger(value){
        if(!super.isInteger(value)) {
            throw new TypeError(`Expected ${value} to be integer but got non-integer value`)
        }
        return true;
    }
    isRegEx(value){
        if(!super.isRegEx(value)) {
            throw new TypeError(`Expected type [object RegExp] but got ${this.getType(value)}`)
        }
        return true;
    }
    isStringHex(value) {
        if(!super.isStringHex(value)) {
            throw new TypeError(`Expected ${value} to be hex but got non-hex value`)
        }
        return true;
    }
    isStringWithValue(value){
        if(!super.isStringWithValue(value)) {
            throw new TypeError(`Expected ${value} to be [object String] and not empty`)
        }
        return true;
    }
    isObjectWithKeys(value){
        if(!super.isObjectWithKeys(value)) {
            throw new TypeError(`Expected ${value} to be [object Object] and have keys`)
        }
        return true;
    }
    isArrayWithValues(value){
        if(!super.isArrayWithValues(value)) {
            throw new TypeError(`Expected ${value} to be [object Array] and not empty`)
        }
        return true;
    }
    isSpecificClass(value, className){
        if(!super.isSpecificClass(value)) {
            throw new TypeError(`Expected Class Name to be ${className} but got ${this.getClassName(value)}`)
        }
        return true;
    }
}
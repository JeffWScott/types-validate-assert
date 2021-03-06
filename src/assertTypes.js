import { ValidateTypes } from './validateTypes'

export class AssertTypes {
    constructor(){
        this.validate = new ValidateTypes()
    }
    //Validation functions
    isObject(value){
        if(!this.validate.isObject(value)) {
            throw new TypeError(`Expected type [object Object] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isFunction(value){
        if(!this.validate.isFunction(value)) {
            throw new TypeError(`Expected type [object Function] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isString(value){
        if(!this.validate.isString(value)) {
            throw new TypeError(`Expected type [object String] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isBoolean(value){
        if(!this.validate.isBoolean(value)) {
            throw new TypeError(`Expected type [object Boolean] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isArray(value){
        if(!this.validate.isArray(value)) {
            throw new TypeError(`Expected type [object Array] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isNumber(value){
        if(!this.validate.isNumber(value)) {
            throw new TypeError(`Expected type [object Number] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isInteger(value){
        if(!this.validate.isInteger(value)) {
            throw new TypeError(`Expected "${value}" to be an integer but got non-integer value`)
        }
        return true;
    }
    isRegEx(value){
        if(!this.validate.isRegEx(value)) {
            throw new TypeError(`Expected type [object RegExp] but got ${this.validate.getType(value)}`)
        }
        return true;
    }
    isStringHex(value) {
        if(!this.validate.isStringHex(value)) {
            throw new TypeError(`Expected "${value}" to be hex but got non-hex value`)
        }
        return true;
    }
    hasKeys(value, keys){
        if(!this.validate.hasKeys(value, keys)) {
            throw new TypeError(`Provided object does not contain all keys ${JSON.stringify(keys)}`)
        }
        return true;
    }
    isStringWithValue(value){
        if(!this.validate.isStringWithValue(value)) {
            throw new TypeError(`Expected "${value}" to be [object String] and not empty`)
        }
        return true;
    }
    isObjectWithKeys(value){
        if(!this.validate.isObjectWithKeys(value)) {
            throw new TypeError(`Expected "${value}" to be [object Object] and have keys`)
        }
        return true;
    }
    isArrayWithValues(value){
        if(!this.validate.isArrayWithValues(value)) {
            throw new TypeError(`Expected "${value}" to be [object Array] and not empty`)
        }
        return true;
    }
    isSpecificClass(value, className){
        if(!this.validate.isSpecificClass(value, className)) {
            throw new TypeError(`Expected Object Class to be "${className}" but got ${this.validate.getClassName(value)}`)
        }
        return true;
    }
}
export class ValidateTypes {
    constructor(){}
    getType(value){
        return Object.prototype.toString.call(value)
    }
    getClassName(value){
        try{
            return value.constructor.name
        } catch (e) {}
        return this.getType(value)
    }
    //Validation functions
    isObject(value){
        if(this.getType(value) === "[object Object]") return true;
        return false;
    }
    isFunction(value){
        if(this.getType(value) === "[object Function]") return true;
        return false;
    }
    isString(value){
        if(this.getType(value) === "[object String]") return true;
        return false;
    }
    isBoolean(value){
        if(this.getType(value) === "[object Boolean]") return true;
        return false;
    }
    isArray(value){
        if(this.getType(value) === "[object Array]") return true;
        return false;  
    }
    isNumber(value){
        if(this.getType(value) === "[object Number]") return true;
        return false;  
    }
    isInteger(value){
        if(this.getType(value) === "[object Number]" && Number.isInteger(value)) return true;
        return false;  
    }
    isRegEx(value){
        if(this.getType(value) === "[object RegExp]") return true;
        return false;  
    }
    isStringHex(value) {
        if (!this.isStringWithValue(value)) return false;
        let hexRegEx = /([0-9]|[a-f])/gim;
        return (value.match(hexRegEx) || []).length === value.length;
    }
    hasKeys(value, keys){
        if(keys.map(key => key in value).includes(false)) return false;
        return true;
    }
    isStringWithValue(value){
        if (this.isString(value) && value !== '') return true;
        return false;
    }
    isObjectWithKeys(value){
        if (this.isObject(value) && Object.keys(value).length > 0) return true;
        return false;
    }
    isArrayWithValues(value){
        if (this.isArray(value) && value.length > 0) return true;
        return false;
    }
    isSpecificClass(value, className){
        if (!this.isObject(value)) return false;
        if (this.getClassName(value) !== className) return false;
        return true
    }
}
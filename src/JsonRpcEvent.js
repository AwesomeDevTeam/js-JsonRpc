import JsonRpcElement from "./JsonRpcElement";
import { validateParams, validateMethod, validateArguments } from "./validators";
import { copyParams } from "./helpers";


/**
 * JSON-RPC Event
 * TODO: Maybe length of 'method' parameter should be checked? Specification does not say anything about empty string as method name
 * @class
 * @param {Object} o Parameters object
 * @param {String} o.method Method name
 * @param {?Array} [o.params=undefined] Event params
 */
export default function JsonRpcEvent(o) {

    validateArguments(o);

    validateMethod(o.method);
    const method = o.method;

    validateParams(o.params);

    const params = copyParams(o.params);

    const instance = Object.create(JsonRpcEvent.prototype);
    instance.method = method;
    instance.params = params;

    return Object.freeze(instance);


}

JsonRpcEvent.prototype = Object.create(JsonRpcElement.prototype, /** @lends JsonRpcElement.prototype */{
    method : { writable: true },
    params : { writable: true },
    serialize : { value : function() {
        return JSON.stringify( { jsonrpc : this.jsonrpc,
            method : this.method,
            params : this.params } );
    }},
    toJSON: {
        value : function(){
            return this.serialize();
        }
    }
});

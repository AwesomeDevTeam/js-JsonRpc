import JsonRpcElement from "./JsonRpcElement";
import { validateParams, validateMethod, validateArguments } from "./validators";
import { copyParams } from "./helpers";

/**
 * JSON-RPC Request
 * TODO: Maybe length of 'method' parameter should be checked? Specification does not say anything about empty string as method name
 * @class
 * @param {Object} o Parameters object
 * @param {String} o.method
 * @param {Array|Object|undefined} o.params Params must be an Array, Object or undefined
 * @param {?String} [o.id=UUID] Request id if empty it will be set to randomly generated UUID TODO: For now id is set always to 1!!!
 */
export default function JsonRpcRequest(o) {

    validateArguments(o);
    validateMethod(o.method);
    const method = o.method;

    validateParams(o.params);
    const params = copyParams(o.params);

    //this.id = "id" in o ? o.id : UUID.randomUUID().serialize();
    const id = "id" in o ? o.id : 1;

    return Object.freeze(Object.create(JsonRpcRequest.prototype,/** @lends JsonRpcRequest.prototype */ {

        method : { value : method },
        params : { value : params },
        id : { value : id },

        /**
         * Serialize request to object to string
         * @return {String}
         */
        serialize : { value : function() {

            var ret = {
                jsonrpc : this.jsonrpc,
                id : this.id,
                method : this.method
            };

            if ( typeof this.params !== "undefined" ) {
                ret.params = this.params;
            }

            return JSON.stringify(ret);

        }}
    }));

}

JsonRpcRequest.prototype = Object.freeze(Object.create(JsonRpcElement.prototype));


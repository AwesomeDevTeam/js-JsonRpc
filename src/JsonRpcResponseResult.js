import JsonRpcResponse from "./JsonRpcResponse";
import { validateId, validateArguments } from "./validators";

/**
 * JSON-RPC Response result
 * @class
 * @param {Object} o Parameters object
 * @param {String} o.id
 * @param {Object} o.result
 */
export default function JsonRpcResponseResult(o) {

    validateArguments(o);
    validateId(o);

    if ( ( "result" in o) === false ) {

        throw new Error("Required 'result' param is not present");

    }

    const id = o.id;
    const result = o.result;

    return Object.freeze(Object.create(JsonRpcResponseResult.prototype, /** @lends JsonRpcResponseResult.prototype */ {

        id : { value: id },
        result : { value: result },
        /**
         * Serialize request object to string
         * @return {String}
         */
        serialize : { value : function() {

            return JSON.stringify({
                jsonrpc : this.jsonrpc,
                id : this.id,
                result : this.result
            });

        }},
        toJSON: {
            value : function() {
                return this.serialize();
            }
        }

    }));

}

JsonRpcResponseResult.prototype = Object.freeze(Object.create(JsonRpcResponse.prototype));

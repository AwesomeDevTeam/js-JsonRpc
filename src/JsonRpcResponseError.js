import JsonRpcResponse from "./JsonRpcResponse";
import JsonRpcError from  "./JsonRpcError";
import { validateId, validateArguments } from "./validators";

/**
 * JSON-RPC Error Response
 * @class
 * @param {Object} o Parameters object
 * @param {String} o.id
 * @param {JsonRpcError} o.error
 */
export default function JsonRpcResponseError(o) {

    validateArguments(o);
    validateId(o);

    if ( !(o.error instanceof JsonRpcError) ) {
        throw Error("error property is not an instance of JsonRpcError!");
    }

    const id = o.id;
    const error = o.error;

    return Object.freeze(Object.create(JsonRpcResponseError.prototype, {
        id : { value : id},
        error  : { value : error }
    }));
}

JsonRpcResponseError.prototype = Object.freeze(Object.create(JsonRpcResponse.prototype));
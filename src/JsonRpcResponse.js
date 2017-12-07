import JsonRpcElement from "./JsonRpcElement";

/**
 * JSON-RPC Response
 * This is abstract class, do not try to create instance of this class!
 * Base class for JSON-RPC responses
 * @class
 * @abstract
 */
export default function JsonRpcResponse() {

    throw new Error("JsonRpcResponse is an abstract class. Can't instantiate or run");

}

JsonRpcResponse.prototype = Object.freeze(Object.create(JsonRpcElement.prototype, {
    id  : { value : null, writable : true}
}));

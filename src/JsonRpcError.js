import { validateArguments } from "./validators";
/**
 * JSON-RPC Error object
 * @class
 * @param {Object} o Parameters object
 * @param {Number} o.code Error code
 * @param {String} [o.message=""] Error message
 * @param {?Object} [o.data=undefined] Additional data associated with error
 */
export default function JsonRpcError(o) {

    if ( ( this instanceof JsonRpcError ) === false ) {
        return new JsonRpcError(o);
    }

    validateArguments(o);

    if ( typeof o.code !== "number" ) {
        throw "Error code must be integer";
    }

    this.code = o.code;
    this.message = "message" in o ? o.message : "";
    this.data = o.data;

    return Object.freeze(this);

}

JsonRpcError.prototype = Object.create(null,/** @lends JsonRpcError.prototype */ {
    code  : { value : 0, writable : true },
    message  : { value : "", writable : true },
    data  : { value : undefined, writable : true }
});

/**
 * Standard JSON-RPC errors
 * @type {Object}
 */
JsonRpcError.ERRORS = Object.freeze( Object.create( null,{
    PARSE_ERROR: {
        value : Object.freeze(Object.create(JsonRpcError.prototype, {
            code: { value: -32700, enumerable : true },
            message: { value : "Parse error", enumerable : true }
        })),
        enumerable : true
    },

    INVALID_REQUEST: {
        value : Object.freeze(Object.create(JsonRpcError.prototype, {
            code: { value : -32600, enumerable : true},
            message: { value : "Invalid Request", enumerable : true }
        })),
        enumerable : true
    },

    METHOD_NOT_FOUND: {
        value : Object.freeze(Object.create(JsonRpcError.prototype, {
            code: { value : -32601, enumerable : true},
            message: { value : "Method not found", enumerable : true }
        })),
        enumerable : true
    },

    INVALID_PARAMS: {
        value : Object.freeze(Object.create(JsonRpcError.prototype, {
            code: { value : -32602, enumerable : true},
            message: { value: "Invalid params", enumerable : true}
        })),
        enumerable : true },

    INTERNAL_ERROR: {
        value : Object.freeze(Object.create(JsonRpcError.prototype, {
            code: { value : -32603, enumerable : true},
            message: { value : "Internal error", enumerable : true }
        })),
        enumerable : true }
}));

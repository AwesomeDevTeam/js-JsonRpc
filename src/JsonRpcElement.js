/**
 * JSON-RPC Element
 * Base class for all JSON-RPC messages
 * This is abstract class, do not try to create instance of this class!
 * @class
 * @abstract
 */
export default function JsonRpcElement() {
    throw new Error("JsonRpcElement is an abstract class. Can't instantiate or run");
}

JsonRpcElement.prototype = Object.freeze( Object.create(null, /** @lends JsonRpcElement.prototype */ {
    jsonrpc : { value : "2.0" },
    serialize : { value : function(){
        return JSON.stringify(this);
    }},
    toJSON: {
        value : function(){
            return this.serialize();
        }
    }
}));


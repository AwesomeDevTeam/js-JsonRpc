//import JsonRpcElement from "./JsonRpcElement";
import JsonRpcRequest from "./JsonRpcRequest";
import JsonRpcResponseResult from "./JsonRpcResponseResult";
import JsonRpcResponseError from "./JsonRpcResponseError";
import JsonRpcError from "./JsonRpcError";
import JsonRpcEvent from "./JsonRpcEvent";

/**
 * Parses Json to JsonRpc object
 * @param {String} str String to parse
 * @param {Boolean} [weak=false] Don't check for existence of "jsonrpc" property in object
 * @return JsonRpcElement
 */
const parse = (str, weak) => {

    const u = "undefined";
    let obj;

    try {

        obj = JSON.parse(str);

    } catch (e) {

        throw new Error(`String ${str} is not a valid JSON`);

    }

    if ( weak === true && ("jsonrpc" in obj) === false ) {

        // TODO: Dedicated exception
        throw new Error("Missing 'jsonrpc' property in unserialized. You can omit this check by using the `weak` param");

    }

    const {id, method, result, error, params} = obj;

    if ( typeof id !== u ) { // Request or response

        if ( typeof method !== u ) {

            if (typeof params === u ) {
                throw new Error("Missing 'method' property in unserialized object");
            }

            return JsonRpcRequest({
                id, method, params
            });

        } else if ( typeof result !== u ) {

            return JsonRpcResponseResult({
                id, result
            });

        } else if ( typeof error !== u ) {

            const { code, message, data } = error;

            return JsonRpcResponseError({
                id,
                error: JsonRpcError({
                    code, message, data
                })
            });

        } else {

            // TODO: Dedicated Exception
            throw new Error("Unserialized object is not a valid JSON-RPC element");

        }

    } else { // Event

        return JsonRpcEvent({
            method, params
        });

    }

};

//JsonRpcElement.parse = parse;
export default parse;


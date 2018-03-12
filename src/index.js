import JsonRpcElement from "./JsonRpcElement";
import JsonRpcError from "./JsonRpcError";
import JsonRpcEvent from "./JsonRpcEvent";
import JsonRpcRequest from "./JsonRpcRequest";
import JsonRpcResponse from "./JsonRpcResponse";
import JsonRpcResponseError from "./JsonRpcResponseError";
import JsonRpcResponseResult from  "./JsonRpcResponseResult";
import parse from "./JsonRpcElementStaticMethods";

JsonRpcElement.parse = parse;
JsonRpcElement.fromJson = parse;

export { JsonRpcElement };
export { JsonRpcError };
export { JsonRpcEvent };
export { JsonRpcRequest };
export { JsonRpcResponse };
export { JsonRpcResponseError };
export { JsonRpcResponseResult };

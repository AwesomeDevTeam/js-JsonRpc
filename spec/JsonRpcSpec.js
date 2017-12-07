const JsonRpcElement = require("../dist/JsonRpc.cjs").JsonRpcElement;
const JsonRpcRequest = require("../dist/JsonRpc.cjs").JsonRpcRequest;
const JsonRpcResponse = require("../dist/JsonRpc.cjs").JsonRpcResponse;
const JsonRpcResponseResult = require("../dist/JsonRpc.cjs").JsonRpcResponseResult;
const JsonRpcResponseError = require("../dist/JsonRpc.cjs").JsonRpcResponseError;
const JsonRpcError = require("../dist/JsonRpc.cjs").JsonRpcError;

// Suite
describe("JsonRpc", function() {

    it("JsonRpcElement constructor should throw Error", () => {

        expect(function() {
            new JsonRpcElement();
        }).toThrowError(Error, "JsonRpcElement is an abstract class. Can't instantiate or run");

    });

    it("JsonRpcRequest constructor with invalid method should throw Error", () => {

        expect(function() {
            new JsonRpcRequest({
                method : 1,
                params : {}
            });
        }).toThrowError(Error, "Method must be a string, but 'number' given");

    });

    it("JsonRpcRequest constructor with params as integer should throw Error", () => {

        expect(function() {
            new JsonRpcRequest({
                method : "invoke",
                params : 0
            });
        }).toThrowError(Error, "Params must be an array, object or undefined, but 'number' given");

    });

    it("JsonRpcRequest constructor with params as string should throw Error", () => {

        expect(function() {
            new JsonRpcRequest({
                method : "invoke",
                params : "0"
            });
        }).toThrowError(Error, "Params must be an array, object or undefined, but 'string' given");

    });

    it("JsonRpcResponse constructor should throw Error", () => {

        expect(function() {
            new JsonRpcResponse();
        }).toThrowError(Error, "JsonRpcResponse is an abstract class. Can't instantiate or run");

    });


    it("JsonRpcRequest constructor with params as object should be an instance of JsonRpcElement and JsonRpcRequest with properties", () => {

        var req = JsonRpcRequest({
            method : "invoke",
            params : {
                value : 1
            },
            id: 0
        });

        expect(req instanceof JsonRpcElement).toBe(true);
        expect(req instanceof JsonRpcRequest).toBe(true);
        expect(req.jsonrpc).toEqual("2.0");
        expect(req.method).toEqual("invoke");
        expect(req.id).toEqual(0);
        expect(req.params).toEqual({ value: 1 });

    });


    it("JsonRpcRequest constructor with params as array should be an instance of JsonRpcElement and JsonRpcRequest with properties", () => {

        var req = JsonRpcRequest({
            method : "invoke",
            params : [1,2,3],
            id: 0
        });


        expect(req instanceof JsonRpcElement).toBe(true);
        expect(req instanceof JsonRpcRequest).toBe(true);
        expect(req.jsonrpc).toEqual("2.0");
        expect(req.method).toEqual("invoke");
        expect(req.id).toEqual(0);
        expect(req.params).toEqual([1,2,3]);

    });

    it("JsonRpcResponse constructor should throw Error", () => {

        expect(function() {
            new JsonRpcResponse();
        }).toThrowError(Error, "JsonRpcResponse is an abstract class. Can't instantiate or run");

    });

    it("JsonRpcResponseResult constructor should be an instance of JsonRpcElement, JsonRpcResponse and JsonRpcResponseResult with properties", () => {

        var req = JsonRpcResponseResult({
            result : "invoke result",
            id: 0
        });


        expect(req instanceof JsonRpcElement).toBe(true);
        expect(req instanceof JsonRpcResponse).toBe(true);
        expect(req instanceof JsonRpcResponseResult).toBe(true);
        expect(req.jsonrpc).toEqual("2.0");
        expect(req.result).toEqual("invoke result");
        expect(req.id).toEqual(0);

    });


    it("JsonRpcResponseError constructor should be an instance of JsonRpcElement, JsonRpcResponse and JsonRpcResponseError with properties", () => {

        var req = JsonRpcResponseError({
            id: 0,
            error : JsonRpcError.ERRORS.METHOD_NOT_FOUND
        });


        expect(req instanceof JsonRpcElement).toBe(true);
        expect(req instanceof JsonRpcResponse).toBe(true);
        expect(req instanceof JsonRpcResponseError).toBe(true);
        expect(req.jsonrpc).toEqual("2.0");
        expect(req.id).toEqual(0);
        expect(req.error instanceof JsonRpcError).toBe(true);


    });

    // TODO: Test this variant from JSON-RPC spec
    // If there was an error in detecting the id in the Request object (e.g. Parse error/Invalid Request), it MUST be Null.
    // TODO: Test for validating exception if parameters object not exists


});

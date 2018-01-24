# JsonRpc [![npm version](https://badge.fury.io/js/%40adt%2Fjson-rpc.svg)](https://badge.fury.io/js/%40adt%2Fjson-rpc) [![Build Status](https://travis-ci.org/AwesomeDevTeam/js-JsonRpc.svg?branch=master)](https://travis-ci.org/AwesomeDevTeam/js-JsonRpc)

Base JsonRpc classes.
Represents all elements from JSON-RPC 2.0 specification http://www.jsonrpc.org/specification

Values that can be omitted, by default are set to undefined.

Specification says, that params in request can be ommited, but omitting property in object is not a good practice.
Therefore, request and event object "params" property always exists, but can be set to value "undefined".
When params property is undefined it will not be serialized.

## Install

npm install @adt/json-rpc

## Why i should use Json-RPC?

## When i can use Json-RPC?

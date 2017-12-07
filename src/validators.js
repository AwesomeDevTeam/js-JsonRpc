export const validateId = o => {

    if ( ( "id" in o ) === false ) {
        throw new Error("Required 'id' param is not present");
    }
};

export const validateMethod = method => {

    const methodType = typeof method;

    if ( methodType !== "string" ) {
        throw new Error("Method must be a string, but '" + methodType + "' given");
    }

};

export const validateParams = params => {

    const paramsType = typeof params;
    const paramsIsArray = Array.isArray(params);

    if ( paramsType === "undefined" ) {
        return;
    }

    if ( paramsIsArray === false && ( paramsType !== "object" && paramsType !== "undefined" ) ) {
        throw new Error("Params must be an array, object or undefined, but '" + paramsType + "' given");
    }

};

export  const validateArguments = args => {

    if ( typeof args === "undefined") {
        throw new Error("Required parameters object not present");
    }
};


// TODO: For now this is only one level shallow copy, but should be real deep copy with omitting functions
export const copyParams = params => {

    if ( typeof params === "undefined" ) {

        return undefined;

    } else if (  Array.isArray(params) ) {

        return Object.freeze(params.splice(0));

    } else {

        const ret = Object.create(null);

        for (let a in params) {
            ret[a] = params[a];
            Object.defineProperty(ret, a, { value : params[a] });
        }

        return Object.freeze(ret);
    }

};

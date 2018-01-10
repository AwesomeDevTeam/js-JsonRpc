/**
 * UUID
 * @constructor
 */
export default function UUID(uuid) {

    return Object.create(UUID.prototype,/** @lends UUID.prototype */ {
        value : { value : uuid, writable : true},
        serialize : {value : function() {

            const val = this.value;

            return [
                val[0] + val[1],
                val[2],
                val[3],
                val[4],
                val[5] + val[6] + val[7]].join("-");

        }}
    });

}

UUID.randomUUID = function () {
    return UUID(guid());
};

UUID.fromString = function(str) {

    const replaced = str.replace(/-/g,"");

    const a = [];
    for(let i=0;i<32;i+=4){
        a.push(replaced.slice(i,i+4));
    }

    return UUID(a);

};

/**
 * Helper function
 * @returns {String}
 */
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

/**
 * Helper function
 * @return {Array}
 */
function guid() {

    const ar=[];
    for(let i=0;i<8;i++){
        ar.push(s4());
    }
    return ar;
}



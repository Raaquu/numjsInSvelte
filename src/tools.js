import { onMount } from "svelte";
import * as math from "mathjs";
// This is my first try with require, but the "module" is not compatible in the browser
    // import {createRequire} from "module";
    // const require = createRequire( import.meta.url);
    // var nj = require('numjs');

// The standard way of importing, results in global not defined error
import nj from "numjs"

// The onMount way
    // let nj;
    // onMount(async () => {       
    //     nj = (await import ("numjs")).default
    // })

// Another try importing it via script and then referring to it 
    //  var nj = globalThis.nj

// Some functions to see if numjs is working.

function matrify_dual( primal, dual ) {

    var PRIMAL  = nj.diag([primal,primal,primal])
    var DUAL = nj.diag([dual,dual,dual])
    var ZZ = nj.zeros([3,3])

    return nj.concatenate( (nj.concatenate(PRIMAL,DUAL)).T, (nj.concatenate(ZZ,PRIMAL)).T) 

}
function normalized (some_vec) {

    if(some_vec instanceof nj.NdArray){
        some_vec = some_vec.tolist()
    }

    var copy_some_vec = some_vec

    if(math.norm(some_vec) == 0){
        return nj.zeros(some_vec.length)
    }

    return nj.array(copy_some_vec.map(function(x) { return x * (1/math.norm(some_vec)); }));
}
export const testVec = [2,1,4]
export const testVec2 = [2,1,5]
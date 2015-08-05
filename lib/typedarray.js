'use strict';

// MODULES //

var EKURTOSIS = require( './number.js' );


// EKURTOSIS //

/**
* FUNCTION: ekurtosis( out, lambda )
*	Computes the distribution ekurtosis for parameters stored in a typed array.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} lambda - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function ekurtosis( out, lambda ) {
	var len = lambda.length,
		i;
	for ( i = 0; i < len; i++ ) {
		out[ i ] = EKURTOSIS( lambda[ i ] );
	}
	return out;
} // end FUNCTION ekurtosis()


// EXPORTS //

module.exports = ekurtosis;

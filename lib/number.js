'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// EKURTOSIS //

/**
* FUNCTION ekurtosis( lambda )
*	Computes the distribution ekurtosis for a Poisson distribution with parameter lambda.
*
* @param {Number} lambda - mean parameter
* @returns {Number} distribution ekurtosis
*/
function ekurtosis( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return 1 / lambda;
} // end FUNCTION ekurtosis()


// EXPORTS

module.exports =  ekurtosis;

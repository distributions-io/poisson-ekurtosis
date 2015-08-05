/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	ekurtosis = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number ekurtosis', function tests() {

	it( 'should export a function', function test() {
		expect( ekurtosis ).to.be.a( 'function' );
	});

	it( 'should compute the distribution ekurtosis', function test() {
		assert.closeTo( ekurtosis( 2 ), 0.5, 1e-5 );
		assert.closeTo( ekurtosis( 5  ), 0.2, 1e-5 );
		assert.closeTo( ekurtosis( 10  ), 0.1, 1e-5 );
		assert.closeTo( ekurtosis( 20  ), 0.05, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter lambda', function test() {
		assert.isTrue( isnan( ekurtosis( -1 ) ) );
	});

});

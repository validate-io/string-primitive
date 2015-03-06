/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isString = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-string-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isString ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isString( 'beep' );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			new String( 'beep' ),
			5,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isString( value );
		}
	});

});

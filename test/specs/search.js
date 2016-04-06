(function() {
	"use strict";

	var assert = chai.assert;
	var fixtureHTML = $("#fixtures").html();

	suite("search results", function(){

		setup(function(){  //do a set up method before each test 

			$('#fixtures').html(fixtureHTML);

		});

		teardown(function(){

			console.log("after each test");  //this is the opposite of set up method

		});

		test("valid query for searching", function(){

			assert.strictEqual($(".results li").length, 0, "results good");
			var returnValue = window.foo.doSearch("Ryan");
			assert.strictEqual(typeof returnValue, "undefined", "on success no return value");
			assert.ok($(".results li").length > 0, "results typical");

		});

		test("no query provided", function(){
			assert.strictEqual($(".results li").length, 0, "results good");
			var returnValue = window.foo.doSearch();
			assert.strictEqual(returnValue, null, "null returned on missing argument");
			assert.strictEqual($(".results li").length, 0, "results are empty at the end");
		});
	});

})();
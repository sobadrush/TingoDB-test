var Db = require('tingodb')().Db,
    assert = require('assert');
 
var db = new Db('.', {});

// Fetch a collection to insert document into
var collection = db.collection("Products-TingoDB.db");

// 查詢：Fetch the document
collection.findOne({ "prodName" : 'SWITCH電力加強版' }, function(err, item) {
	assert.equal(null, err);
	assert.equal('SWITCH電力加強版', item.prodName);
	console.log('item >>> ' , item);
}); 
 
// 查詢：Fetch the document
collection.findOne({ "id" : 1003 }, function(err, item) {
	console.log('item >>> ' , item);
});  
var Db = require('tingodb')().Db,
    assert = require('assert');
 
var db = new Db('.', {});

// Fetch a collection to insert document into
var productCollection = db.collection("Products-TingoDB.db");

// 查詢：Fetch the document
// productCollection.findOne({ "prodName" : 'SWITCH電力加強版' }, function(err, item) {
// 	assert.equal(null, err);
// 	assert.equal('SWITCH電力加強版', item.prodName);
// 	console.log('item >>> ' , item);
// }); 
 
// 查詢：Fetch the document
// productCollection.findOne({ "id" : 1003 }, function(err, item) {
// 	console.log('item >>> ' , item);
// });  

// 查詢：Fetch the document
// productCollection.find({ "id" : 1003 }, function(err, item) {
// 	console.log('cursor >>> ' , item);
// });  

// 查詢: 所有 - find會回傳cursor
// var cursor = productCollection.find();
//  cursor.each(function(err, item) {
// 	console.log('item >>> ', item);
// // Let's close the db
//  db.close();
// });

// 查詢: find會回傳cursor - 加條件
// var cursor = productCollection.find({ "id" : 1003 });
// cursor.each(function(err, item) {
// 	console.log('item >>> ', item);
// 	// Let's close the db
// 	db.close();
// });

// 查詢: 所有 - find會回傳cursor - 加條件 小於等於 $lte
// var cursor = productCollection.find({ "prodPrice" : { $lte : 2000 } }); // 小於等於
// cursor.each(function(err, item) {
// 	console.log('item >>> ', item);
// 	// Let's close the db
// 	db.close();
// });

// 查詢: 所有 - find會回傳cursor - 加"多"個條件 ( ex: id <= 1002 && prodPrice >= 2000 )
// var cursor = productCollection.find( { "id" : { $lte : 1002 }, "prodPrice" : { $gte : 2000 } }  ); 
// cursor.each(function(err, item) {
// 	console.log('item >>> ', item);
// 	// Let's close the db
// 	db.close();
// });


// 更新：會在 Products-TingoDB.db 多出現一筆，但用findt查詢時會查到最新的
// productCollection.update( { _id : 2 }, { $set: { prodQuantity : 0 } } )
// productCollection.update( { prodName : 'SWITCH電力加強版' }, { $set: { prodQuantity : 99 } } )
// // 查看看
// productCollection.findOne({ _id : 2 }, (err, item) => {
// 	console.log('item >>> ' , item);
// 	db.close();
// }); 


// // 刪除：
// productCollection.remove( { _id : 2 } )
// // 查看看
// productCollection.findOne({ _id : 2 }, (err, item) => {
// 	console.log('item >>> ' , item);
// 	db.close();
// }); 
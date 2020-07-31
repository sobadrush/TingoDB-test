// -------------------------------------------------
// 【How To Use?】 : 使用 tingoDB
// 1. 安裝Tingo：npm install tingodb
// 2. 新增此js檔：tingo-start.js
// 3. 執行：開啟cmder → node tingo-start.js
// 4. 查詢測試：開啟cmder → node queryExample.js
// ref. https://www.npmjs.com/package/tingodb
// -------------------------------------------------
// 引入 product_list.json
const product_list = require('./data/products.json')
console.log(product_list.myProducts);
let prodList = product_list.myProducts;

var Db = require('tingodb')().Db,
    assert = require('assert');
 
var db = new Db('.', {});

// Fetch a collection to insert document into
var productCollection = db.collection("Products-TingoDB.db");

// 逐筆新增products.json中的element
prodList.forEach((item, index, array) => {
  console.log(item, index, array); // 物件, 索引, 全部陣列
  
  // Insert a single document
  productCollection.insert(item, function(err, result) {
      assert.equal(null, err);
  });
  
});

  
  
var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectID
module.exports={
    addProduct:(product,callback)=>{
        ;
        db.get().collection('product').insertOne(product).then((data)=>{
            
            callback(data.ops[0]._id)

        })
    },
getAllproducts:(callback)=>{
    return new Promise(async(resolve,reject)=>{
        let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
        resolve(products)
    })
},
deletProduct:(prodId)=>{
    return new Promise((resolve,reject)=>{
        db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(prodId)}).then((response)=>{
            //console.log(response);
            resolve(response)
        })
    })
}
}
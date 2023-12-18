/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zlap1y6g60aiens")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v0wvfjfh",
    "name": "field",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zlap1y6g60aiens")

  // remove
  collection.schema.removeField("v0wvfjfh")

  return dao.saveCollection(collection)
})

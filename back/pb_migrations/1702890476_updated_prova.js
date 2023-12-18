/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zlap1y6g60aiens")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lc0xsdta",
    "name": "immagine",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zlap1y6g60aiens")

  // remove
  collection.schema.removeField("lc0xsdta")

  return dao.saveCollection(collection)
})

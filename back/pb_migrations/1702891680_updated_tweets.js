/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zsw0l71cnfrlmaz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ywegw7m",
    "name": "subject",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rxejcmhg4tasvti",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zsw0l71cnfrlmaz")

  // remove
  collection.schema.removeField("1ywegw7m")

  return dao.saveCollection(collection)
})

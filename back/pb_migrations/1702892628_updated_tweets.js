/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zsw0l71cnfrlmaz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "po5ddhh5",
    "name": "like",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zsw0l71cnfrlmaz")

  // remove
  collection.schema.removeField("po5ddhh5")

  return dao.saveCollection(collection)
})

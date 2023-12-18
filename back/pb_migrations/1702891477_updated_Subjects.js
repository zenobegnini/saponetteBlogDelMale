/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tq6mlqkl",
    "name": "Subject",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypwivjbl",
    "name": "Author",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti")

  // remove
  collection.schema.removeField("tq6mlqkl")

  // remove
  collection.schema.removeField("ypwivjbl")

  return dao.saveCollection(collection)
})

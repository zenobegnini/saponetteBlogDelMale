/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nr9zBdT` ON `subjects` (`name`)"
  ]

  // remove
  collection.schema.removeField("ypwivjbl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6hbtqbk",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tq6mlqkl",
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
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nr9zBdT` ON `subjects` (`Name`)"
  ]

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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6hbtqbk",
    "name": "Name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
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

  return dao.saveCollection(collection)
})

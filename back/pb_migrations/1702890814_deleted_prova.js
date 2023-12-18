/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zlap1y6g60aiens");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "zlap1y6g60aiens",
    "created": "2023-12-18 09:05:19.680Z",
    "updated": "2023-12-18 09:07:56.083Z",
    "name": "prova",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5qyuctqh",
        "name": "ciao",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

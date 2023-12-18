/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zsw0l71cnfrlmaz",
    "created": "2023-12-18 09:16:12.192Z",
    "updated": "2023-12-18 09:16:12.192Z",
    "name": "tweets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ikkilxfm",
        "name": "Title",
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
        "id": "jiwstq2d",
        "name": "Content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zsw0l71cnfrlmaz");

  return dao.deleteCollection(collection);
})

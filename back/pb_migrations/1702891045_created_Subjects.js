/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rxejcmhg4tasvti",
    "created": "2023-12-18 09:17:25.661Z",
    "updated": "2023-12-18 09:17:25.661Z",
    "name": "Subjects",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_nr9zBdT` ON `Subjects` (`Name`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti")

  collection.name = "subjects"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nr9zBdT` ON `subjects` (`Name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rxejcmhg4tasvti")

  collection.name = "Subjects"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nr9zBdT` ON `Subjects` (`Name`)"
  ]

  return dao.saveCollection(collection)
})

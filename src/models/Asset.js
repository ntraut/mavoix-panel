import Parse from 'parse'

export const NAME_KEY = 'name'
export const PARSE_FILE_KEY = 'parseFile'
export const PARENT_KEY = 'parent'

/*
** Represents assets
*/
export default class AssetModel extends Parse.Object {
  constructor () {
    super('Asset')
  }

  static New (name, parseFile) {
    const newAssetModel = new AssetModel()

    newAssetModel
      .set(NAME_KEY, name) // Asset's name
      .set(PARENT_KEY, null) // Asset's creator
      .set(PARSE_FILE_KEY, parseFile) // Asset's parse file
    return newAssetModel
  }
}

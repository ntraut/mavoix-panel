import Parse from 'parse'

import randomHex from '~/utils/randomHex'
import slugify from '~/utils/slugify'

export const NAME_KEY = 'name'
export const HEX_COLOR_KEY = 'hexColor'
export const SLUG_KEY = 'slug'

/*
** Represents a tab.
*/
export default class TabModel extends Parse.Object {
  constructor () {
    super('Tab')
  }

  static New (name, hexColor) {
    const newTab = new TabModel()

    newTab
      .set(NAME_KEY, name) // Tab's name
      .set(HEX_COLOR_KEY, hexColor) // Tab's color
      .set(SLUG_KEY, slugify(name)) // Tab's slug (http://exemple.com/tabs/{slug})
    return newTab
  }

  static Create (name) {
    return TabModel.New(name, randomHex())
  }
}

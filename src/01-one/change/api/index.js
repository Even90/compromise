import caseFns from './case.js'
import insert from './insert.js'
import replace from './replace.js'
import remove from './remove.js'
import whitespace from './whitespace.js'
import sort from './sort.js'

const methods = Object.assign({}, caseFns, insert, replace, remove, whitespace, sort)

const addAPI = function (View) {
  Object.assign(View.prototype, methods)
}
export default addAPI

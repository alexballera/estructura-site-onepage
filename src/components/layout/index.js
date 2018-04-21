'use strict'
import createNavbar from './createNavbar'
import createMain from './createMain'
import createFooter from './createFooter'
import addMeta from './addHeadMeta'
import addBodyBrowserHappy from './addBodyBrowserHappy'

export default () => {
  addMeta()
  addBodyBrowserHappy()
  createNavbar()
  createMain()
  createFooter()
}

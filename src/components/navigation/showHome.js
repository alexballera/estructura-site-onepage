'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showHome = () => {
  hideViews()
  $app.find('#sliderHome').show('fade', 1000)
  $app.find('#seccion-home').show('fade', 1000)
  document.title = `${NavItems.title.home}`
}
export default showHome

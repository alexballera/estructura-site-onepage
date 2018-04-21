'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showView3 = () => {
  hideViews()
  const SectionID = '#seccion-' + `${NavItems.id.id3}`
  const liID = '#li-' + `${NavItems.id.id3}`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')
  document.title = `${NavItems.title.view3}`
}

module.exports = showView3

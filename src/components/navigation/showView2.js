'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showView2 = () => {
  hideViews()
  const SectionID = '#seccion-' + `${NavItems.id.id2}`
  const liID = '#li-' + `${NavItems.id.id2}`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')
  document.title = `${NavItems.title.view2}`
}

module.exports = showView2

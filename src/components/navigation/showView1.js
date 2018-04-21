'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showView1 = () => {
  hideViews()

  const SectionID = '#seccion-' + `${NavItems.id.id1}`
  const liID = '#li-' + `${NavItems.id.id1}`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')
  document.title = `${NavItems.title.view1}`
}

module.exports = showView1

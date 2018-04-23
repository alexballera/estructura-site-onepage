'use strict'
import hideViews from './hideViews'
import {$app} from '../layout/app'
import {data} from '../layout/addHeadMeta'

const showHome = () => {
  const brandLogo = '#brand-logo'
  const liHome = '#li-home'
  const liID1 = '#li-view-1'
  const liID2 = '#li-view-2'
  const liID3 = '#li-view-3'

  hideViews()

  $app.find('#seccion-home').show('fade', 1000)
  document.title = `${data.title}`

  $app.find(liHome).click(() => {
    removeClass()
  })

  $app.find(brandLogo).click(() => {
    removeClass()
  })

  var removeClass = () => {
    $app.find(liID1).removeClass('activado')
    $app.find(liID2).removeClass('activado')
    $app.find(liID3).removeClass('activado')
  }
}
export default showHome

'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'

const showHome = () => {
  hideViews()
  $app.find('#seccion-home').show('fade', 1000)
}
export default showHome

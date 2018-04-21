'use strict'
import {setAttributes} from '../../scripts/helpers/setAttributes.js'

const home = document.createElement('div')

setAttributes(home, {
  'class': 'home',
  'id': 'home'
})

const createHome = () => {
  const main = document.getElementById('main')
  main.appendChild(home)
}

export {createHome, home}

'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showView1 from './showView1'
import showView2 from './showView2'
import showView3 from './showView3'
import showLegal from './showLegal'
import notFound from './notFound'
import page from 'page'

const baseUri = '/'

const id = 'view'

const NavItems = {
  items: {
    home: 'Home',
    item1: 'Vista 1',
    item2: 'Vista 2',
    item3: 'Vista 3',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  title: {
    home: 'Home',
    view1: 'Vista 1',
    view2: 'Vista 2',
    view3: 'Vista 3',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  id: {
    home: 'home',
    id1: id + '-1',
    id2: id + '-2',
    id3: id + '-3',
    legal: id + '-legal',
    nf: 'not-found'
  },
  links: {
    home: baseUri,
    link1: baseUri + 'vista-uno',
    link2: baseUri + 'vista-dos',
    link3: baseUri + 'vista-tres',
    legal: baseUri + 'legal',
    nf: '*'
  }
}

const Navigation = () => {
  hideViews()
  initHome()
  page(NavItems.links.home, showHome)
  page(NavItems.links.link1, showView1)
  page(NavItems.links.link2, showView2)
  page(NavItems.links.link3, showView3)
  page(NavItems.links.legal, showLegal)
  page(NavItems.links.nf, notFound)
  page()
}

export {Navigation, NavItems}

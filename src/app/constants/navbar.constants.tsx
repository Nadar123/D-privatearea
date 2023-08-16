import React from 'react'

import ICONS from './icons.costants'

export const NAV_SETTINGS = {
  OPENED_WIDTH: 240,
  CLOSED_WIDTH: 60
}

const { OverviewIcon, Microsoft365Icon } = ICONS

export const NAV_ITEMS = Object.freeze([
  {
    TITLE: 'Overview',
    PATH: '/',
    ICON: <OverviewIcon />
  },
  {
    TITLE: 'Microsoft 365',
    PATH: '/microsoft365',
    ICON: <Microsoft365Icon />
  }
])

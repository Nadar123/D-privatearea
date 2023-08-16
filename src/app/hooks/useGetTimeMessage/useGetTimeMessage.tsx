import React from 'react'

export const useGetTimeMessage = () => {
  const date = new Date().getHours()
  let timeStatement: string | undefined

  if (date < 12) {
    timeStatement = 'בוקר טוב'
  } else if (date < 18) {
    timeStatement = 'צהריים טובים'
  } else {
    timeStatement = 'ערב טוב'
  }
  return timeStatement
}

import React, { useState, useEffect, useRef } from 'react'

export const useChatScroll = () => {
  const messageEl = useRef<any>(null)

  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event: any) => {
        const { currentTarget: target } = event
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' })
      })
    }
  }, [messages])

  return messageEl
}

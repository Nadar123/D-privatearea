import React, { useState } from 'react'
import { setMessages, addMessage, setCallID, updateMessageText, setStatusID } from '../../state/features/chat.feature'
import { useAppDispatch, useAppSelector } from '../redux.hooks'

export const useChatMessages = () => {
  const { callID, messages, statusID } = useAppSelector((state: { chat: any }) => state.chat)
  const dispatch = useAppDispatch()

  const _setMessages = (messages: any) => {
    dispatch(setMessages({ messages }))
  }

  const _updateMessageText = (index: number, newText: string) => {
    dispatch(updateMessageText({ index, newText }))
  }

  const _addMessage = async (message: any) => {
    dispatch(addMessage({ message }))
  }

  const _setCallID = (callID: number) => {
    dispatch(setCallID({ callID }))
  }

  const _setStatusID = (statusID: any) => {
    dispatch(setStatusID({ statusID }))
  }

  return {
    addMessage: _addMessage,
    updateMessageText: _updateMessageText,
    messages,
    setMessages: _setMessages,
    setCallID: _setCallID,
    callID,
    statusID,
    setStatusID: _setStatusID
  }
}

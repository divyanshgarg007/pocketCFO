import {Buffer} from 'buffer'

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function removeToken(key) {
  return localStorage.removeItem(key)
}
export function removeAll() {
  return localStorage.clear()
}

export function toBase64(val) {
  if (!val) return
  const value = val.toString()
  return Buffer.from(value).toString('base64')
}

export function base64ToString(val) {
  if (!val) return ''
  let buff = Buffer(val, 'base64')
  let base64ToStringNew = buff.toString('ascii')
  return base64ToStringNew
}

export function urlToString(val) {
  return val.split('-').join(' ')
}

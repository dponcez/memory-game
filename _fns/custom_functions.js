export const selector = (element) => document.querySelector(element);
export const selectorAll = (element) => document.querySelectorAll(element);
// listener wrapper based on Dave Gray's YouTube Channel - 10 JavaScript Function Examples: https://www.youtube.com/watch?v=LDgPTw6tePk&t=2s"
export const handler  = ($, event, callback, capture = false) => {
  if($ && typeof $.addEventListener === 'function'){
    $.addEventListener(event, callback, !!capture)
  }
}
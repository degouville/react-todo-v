export default { 
  get(key: string) {
    const item = localStorage.getItem(key)
    return item && JSON.parse(item)
  },
  set(key: string, value: object) {
    const item = JSON.stringify(value)
    localStorage.setItem(key, item)
  } 
}

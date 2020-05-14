function findBy(key, value) {
    return function(e) {
      let keys = Object.keys(e)
let vals = Object.values(e)
if (keys.includes(key) == true && vals.includes(value) == true) {
 return e
}
}
}

export { findBy }
module.exports = function({ e, addUtilities, config }) {
  let newUtilities = {}
  let margins = config('theme.margin', {})
  
  for (const key in margins) {
    let className = `.${e(`o-${key}`)} > * + *`
    let marginTop = margins[key]

    if (marginTop == 'auto') {
      continue
    }

    newUtilities[className] = {marginTop}
  }

  addUtilities(newUtilities)
}

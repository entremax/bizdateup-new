export type ColorType = 'hex' | 'hsl' | 'hsla' | 'rgb'

export function getRandomColor(seed: number, colorType: ColorType = 'hex') {
  const isValidSeed = seed !== undefined

  if (isValidSeed && colorType === 'hsl') {
    return getRandomHSLColor(seed)
  } else if (isValidSeed && colorType === 'hsla') {
    return getRandomHSLAColor(seed)
  } else if (isValidSeed && colorType === 'rgb') {
    return getRandomRGBColor(seed)
  } else {
    return getRandomHexColor()
  }
}

function getRandomHSLColor(seed: number) {
  const colorSeed = seed % 10
  return `hsl(${colorSeed}00, 70%, 80%)`
}

function getRandomHSLAColor(seed: number) {
  const colorSeed = seed % 10
  return `hsla(${colorSeed}00, 70%, 80%, 1)`
}

function getRandomRGBColor(seed: number) {
  const colorSeed = seed % 10
  const r = (colorSeed * 10) % 256
  const g = (colorSeed * 20) % 256
  const b = (colorSeed * 30) % 256
  return `rgb(${r}, ${g}, ${b})`
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

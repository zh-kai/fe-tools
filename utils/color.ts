const RGB_COLOR_REGEXP = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i
const HEX_COLOR_REGEXP = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i
// @note: checks
export const isRgbColor = (color: string) => RGB_COLOR_REGEXP.test(color)
export const isHexColor = (color: string) => HEX_COLOR_REGEXP.test(color)

export const parseRgbColor = (color: string) => {
  if (!isRgbColor(color)) return null

  const matchs = color.match(RGB_COLOR_REGEXP)
  if (!matchs) return null

  return {
    r: parseInt(matchs[1]),
    g: parseInt(matchs[2]),
    b: parseInt(matchs[3]),
  }
}

export const rgb2hex = (color: string) => {
  const parsedColor = parseRgbColor(color)
  if (!parsedColor) return ''

  const r = dec2hex(parsedColor.r).padStart(2, '0')
  const g = dec2hex(parsedColor.g).padStart(2, '0')
  const b = dec2hex(parsedColor.b).padStart(2, '0')

  return `#${r}${g}${b}`
}

export const rgb2hsl = (color: string) => {
  const parsedColor = parseRgbColor(color)
  if (!parsedColor) return ''

  const r = parsedColor.r / 255
  const g = parsedColor.g / 255
  const b = parsedColor.b / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let hue = 0,
    saturation = 0,
    light = (max + min) / 2

  if (max !== min) {
    const d = max - min
    saturation = light > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        hue = (b - r) / d + 2
        break
      case b:
        hue = (r - g) / d + 4
        break
    }
    hue /= 6
  }

  const h = Math.round(hue * 360)
  const s = Math.round(saturation * 100)
  const l = Math.round(light * 100)

  return `hsl(${h}, ${s}, ${l})`
}

export const parseHexColor = (color: string) => {
  if (!isHexColor(color)) return null

  const matchs = color.match(HEX_COLOR_REGEXP)
  if (!matchs) return null

  let r = '0',
    g = '0',
    b = '0'
  const colorValue = matchs[1]
  if (colorValue.length === 3) {
    r = colorValue.slice(0, 1)
    g = colorValue.slice(1, 2)
    b = colorValue.slice(2)
  }
  if (colorValue.length === 6) {
    r = colorValue.slice(0, 2)
    g = colorValue.slice(2, 4)
    b = colorValue.slice(4)
  }

  return {
    r: hex2dec(r),
    g: hex2dec(g),
    b: hex2dec(b),
  }
}

export class Color {
  private r: number
  private g: number
  private b: number
  private a: number
  private color: string

  constructor(color: string) {
    // @note: init
    this.color = color
    this.r = 0
    this.g = 0
    this.b = 0
    this.a = 0

    switch (true) {
      case isRgbColor(color): {
        const _c = parseRgbColor(color)
        if (_c) {
          this.r = _c.r
          this.g = _c.g
          this.b = _c.b
          this.a = 1
        }
        break
      }
      case isHexColor(color): {
        const _c = parseHexColor(color)
        if (_c) {
          this.r = _c.r
          this.g = _c.g
          this.b = _c.b
          this.a = 1
        }
        break
      }
      default:
        throw new Error('Invalid color.')
    }
  }

  toRgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }
  toRgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
  toHex() {
    return rgb2hex(this.toRgb())
  }
  toHsl() {
    return rgb2hsl(this.toRgb())
  }
}

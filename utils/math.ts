/**
 * 十进制 -> 十六进制
 */
export const dec2hex = (num: number | string) => parseInt(num.toString()).toString(16)

/**
 * 十六进制 -> 十进制
 */
export const hex2dec = (num: string) => parseInt(num, 16)

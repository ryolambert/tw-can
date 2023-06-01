import { twCan } from '../src'

test('does not alter non-tailwind classes', () => {
    expect(twCan('non-tailwind-class inline block')).toBe('non-tailwind-class block')
    expect(twCan('inline block inline-1')).toBe('block inline-1')
    expect(twCan('inline block i-inline')).toBe('block i-inline')
    expect(twCan('focus:inline focus:block focus:inline-1')).toBe('focus:block focus:inline-1')
})

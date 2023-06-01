import { twCan } from '../src'

test('merges tailwind classes with important modifier correctly', () => {
    expect(twCan('!font-medium !font-bold')).toBe('!font-bold')
    expect(twCan('!font-medium !font-bold font-thin')).toBe('!font-bold font-thin')
    expect(twCan('!right-2 !-inset-x-px')).toBe('!-inset-x-px')
    expect(twCan('focus:!inline focus:!block')).toBe('focus:!block')
})

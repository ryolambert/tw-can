import { twCan } from '../src'

test('merges non-conflicting classes correctly', () => {
    expect(twCan('border-t border-white/10')).toBe('border-t border-white/10')
    expect(twCan('border-t border-white')).toBe('border-t border-white')
    expect(twCan('text-3.5xl text-black')).toBe('text-3.5xl text-black')
})

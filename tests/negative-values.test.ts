import { twCan } from '../src'

test('handles negative value conflicts correctly', () => {
    expect(twCan('-m-2 -m-5')).toBe('-m-5')
    expect(twCan('-top-12 -top-2000')).toBe('-top-2000')
})

test('handles conflicts between positive and negative values correctly', () => {
    expect(twCan('-m-2 m-auto')).toBe('m-auto')
    expect(twCan('top-12 -top-69')).toBe('-top-69')
})

test('handles conflicts across groups with negative values correctly', () => {
    expect(twCan('-right-1 inset-x-1')).toBe('inset-x-1')
    expect(twCan('hover:focus:-right-1 focus:hover:inset-x-1')).toBe('focus:hover:inset-x-1')
})

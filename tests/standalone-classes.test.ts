import { twCan } from '../src'

test('merges standalone classes from same group correctly', () => {
    expect(twCan('inline block')).toBe('block')
    expect(twCan('hover:block hover:inline')).toBe('hover:inline')
    expect(twCan('hover:block hover:block')).toBe('hover:block')
    expect(twCan('inline hover:inline focus:inline hover:block hover:focus:block')).toBe(
        'inline focus:inline hover:block hover:focus:block',
    )
    expect(twCan('underline line-through')).toBe('line-through')
    expect(twCan('line-through no-underline')).toBe('no-underline')
})

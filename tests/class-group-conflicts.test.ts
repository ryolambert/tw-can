import { twCan } from '../src'

test('merges classes from same group correctly', () => {
    expect(twCan('overflow-x-auto overflow-x-hidden')).toBe('overflow-x-hidden')
    expect(twCan('w-full w-fit')).toBe('w-fit')
    expect(twCan('overflow-x-auto overflow-x-hidden overflow-x-scroll')).toBe('overflow-x-scroll')
    expect(twCan('overflow-x-auto hover:overflow-x-hidden overflow-x-scroll')).toBe(
        'hover:overflow-x-hidden overflow-x-scroll',
    )
    expect(
        twCan('overflow-x-auto hover:overflow-x-hidden hover:overflow-x-auto overflow-x-scroll'),
    ).toBe('hover:overflow-x-auto overflow-x-scroll')
})

test('merges classes from Font Variant Numeric section correctly', () => {
    expect(twCan('lining-nums tabular-nums diagonal-fractions')).toBe(
        'lining-nums tabular-nums diagonal-fractions',
    )
    expect(twCan('normal-nums tabular-nums diagonal-fractions')).toBe(
        'tabular-nums diagonal-fractions',
    )
    expect(twCan('tabular-nums diagonal-fractions normal-nums')).toBe('normal-nums')
    expect(twCan('tabular-nums proportional-nums')).toBe('proportional-nums')
})

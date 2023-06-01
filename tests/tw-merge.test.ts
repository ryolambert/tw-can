import { twCan } from '../src'

test('twCan', () => {
    expect(twCan('mix-blend-normal mix-blend-multiply')).toBe('mix-blend-multiply')
    expect(twCan('h-10 h-min')).toBe('h-min')
    expect(twCan('stroke-black stroke-1')).toBe('stroke-black stroke-1')
    expect(twCan('stroke-2 stroke-[3]')).toBe('stroke-[3]')
    expect(twCan('outline-black outline-1')).toBe('outline-black outline-1')
    expect(twCan('grayscale-0 grayscale-[50%]')).toBe('grayscale-[50%]')
    expect(twCan('grow grow-[2]')).toBe('grow-[2]')
    expect(twCan('grow', [null, false, [['grow-[2]']]])).toBe('grow-[2]')
})

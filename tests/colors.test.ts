import { twCan } from '../src'

test('handles color conflicts properly', () => {
    expect(twCan('bg-grey-5 bg-hotpink')).toBe('bg-hotpink')
    expect(twCan('hover:bg-grey-5 hover:bg-hotpink')).toBe('hover:bg-hotpink')
})

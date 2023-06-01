import { twCan } from '../src'

test('merges content utilities correctly', () => {
    expect(twCan("content-['hello'] content-[attr(data-content)]")).toBe(
        'content-[attr(data-content)]',
    )
})

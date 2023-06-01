import { createTailwindMerge } from 'tailwind-merge'

import { twCan } from '../src'

test('conflicts across prefix modifiers', () => {
    expect(twCan('hover:block hover:inline')).toBe('hover:inline')
    expect(twCan('hover:block hover:focus:inline')).toBe('hover:block hover:focus:inline')
    expect(twCan('hover:block hover:focus:inline focus:hover:inline')).toBe(
        'hover:block focus:hover:inline',
    )
    expect(twCan('focus-within:inline focus-within:block')).toBe('focus-within:block')
})

test('conflicts across postfix modifiers', () => {
    expect(twCan('text-lg/7 text-lg/8')).toBe('text-lg/8')
    expect(twCan('text-lg/none leading-9')).toBe('text-lg/none leading-9')
    expect(twCan('leading-9 text-lg/none')).toBe('text-lg/none')
    expect(twCan('w-full w-1/2')).toBe('w-1/2')

    const customtwCan = createTailwindMerge(() => ({
        cacheSize: 10,
        theme: {},
        classGroups: {
            foo: ['foo-1/2', 'foo-2/3'],
            bar: ['bar-1', 'bar-2'],
            baz: ['baz-1', 'baz-2'],
        },
        conflictingClassGroups: {},
        conflictingClassGroupModifiers: {
            baz: ['bar'],
        },
    }))

    expect(customtwCan('foo-1/2 foo-2/3')).toBe('foo-2/3')
    expect(customtwCan('bar-1 bar-2')).toBe('bar-2')
    expect(customtwCan('bar-1 baz-1')).toBe('bar-1 baz-1')
    expect(customtwCan('bar-1/2 bar-2')).toBe('bar-2')
    expect(customtwCan('bar-2 bar-1/2')).toBe('bar-1/2')
    expect(customtwCan('bar-1 baz-1/2')).toBe('baz-1/2')
})

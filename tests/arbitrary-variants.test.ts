import { twCan } from '../src'

test('basic arbitrary variants', () => {
    expect(twCan('[&>*]:underline [&>*]:line-through')).toBe('[&>*]:line-through')
    expect(twCan('[&>*]:underline [&>*]:line-through [&_div]:line-through')).toBe(
        '[&>*]:line-through [&_div]:line-through',
    )
    expect(twCan('supports-[display:grid]:flex supports-[display:grid]:grid')).toBe(
        'supports-[display:grid]:grid',
    )
})

test('arbitrary variants with modifiers', () => {
    expect(twCan('dark:lg:hover:[&>*]:underline dark:lg:hover:[&>*]:line-through')).toBe(
        'dark:lg:hover:[&>*]:line-through',
    )
    expect(twCan('dark:lg:hover:[&>*]:underline dark:hover:lg:[&>*]:line-through')).toBe(
        'dark:hover:lg:[&>*]:line-through',
    )
    // Whether a modifier is before or after arbitrary variant matters
    expect(twCan('hover:[&>*]:underline [&>*]:hover:line-through')).toBe(
        'hover:[&>*]:underline [&>*]:hover:line-through',
    )
    expect(
        twCan(
            'hover:dark:[&>*]:underline dark:hover:[&>*]:underline dark:[&>*]:hover:line-through',
        ),
    ).toBe('dark:hover:[&>*]:underline dark:[&>*]:hover:line-through')
})

test('arbitrary variants with complex syntax in them', () => {
    expect(
        twCan(
            '[@media_screen{@media(hover:hover)}]:underline [@media_screen{@media(hover:hover)}]:line-through',
        ),
    ).toBe('[@media_screen{@media(hover:hover)}]:line-through')
    expect(
        twCan(
            'hover:[@media_screen{@media(hover:hover)}]:underline hover:[@media_screen{@media(hover:hover)}]:line-through',
        ),
    ).toBe('hover:[@media_screen{@media(hover:hover)}]:line-through')
})

test('arbitrary variants with attribute selectors', () => {
    expect(twCan('[&[data-open]]:underline [&[data-open]]:line-through')).toBe(
        '[&[data-open]]:line-through',
    )
})

test('arbitrary variants with multiple attribute selectors', () => {
    expect(
        twCan(
            '[&[data-foo][data-bar]:not([data-baz])]:underline [&[data-foo][data-bar]:not([data-baz])]:line-through',
        ),
    ).toBe('[&[data-foo][data-bar]:not([data-baz])]:line-through')
})

test('multiple arbitrary variants', () => {
    expect(twCan('[&>*]:[&_div]:underline [&>*]:[&_div]:line-through')).toBe(
        '[&>*]:[&_div]:line-through',
    )
    expect(twCan('[&>*]:[&_div]:underline [&_div]:[&>*]:line-through')).toBe(
        '[&>*]:[&_div]:underline [&_div]:[&>*]:line-through',
    )
    expect(
        twCan(
            'hover:dark:[&>*]:focus:disabled:[&_div]:underline dark:hover:[&>*]:disabled:focus:[&_div]:line-through',
        ),
    ).toBe('dark:hover:[&>*]:disabled:focus:[&_div]:line-through')
    expect(
        twCan(
            'hover:dark:[&>*]:focus:[&_div]:disabled:underline dark:hover:[&>*]:disabled:focus:[&_div]:line-through',
        ),
    ).toBe(
        'hover:dark:[&>*]:focus:[&_div]:disabled:underline dark:hover:[&>*]:disabled:focus:[&_div]:line-through',
    )
})

test('arbitrary variants with arbitrary properties', () => {
    expect(twCan('[&>*]:[color:red] [&>*]:[color:blue]')).toBe('[&>*]:[color:blue]')
    expect(
        twCan(
            '[&[data-foo][data-bar]:not([data-baz])]:nod:noa:[color:red] [&[data-foo][data-bar]:not([data-baz])]:noa:nod:[color:blue]',
        ),
    ).toBe('[&[data-foo][data-bar]:not([data-baz])]:noa:nod:[color:blue]')
})

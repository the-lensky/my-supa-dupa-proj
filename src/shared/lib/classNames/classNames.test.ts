import { classNames } from './classNames';

describe('classNames', () => {
    test('with only 1st param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered visited';
        expect(classNames('someClass', { hovered: true, visited: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with falsy and truthy mods', () => {
        const expected = 'someClass class1 class2 visited';
        expect(classNames('someClass', { hovered: false, visited: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, visited: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});

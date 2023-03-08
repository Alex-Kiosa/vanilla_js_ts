import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    // start data
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 =  sum(a, b)
    const result2 =  sum(a, c)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(4)
})

test('mult should be correct', () => {
    // start data
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 =  mult(a, b)
    const result2 =  mult(a, c)

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(3)
})

test('splitting should be correct', () => {
    // start data
    const sentence1 = 'How are  you'
    const sentence2 = 'I am ok, thanks'

    // action
    const result1 = splitIntoWords(sentence1)
    const result2 = splitIntoWords(sentence2)

    // expect result
    expect(result1.length).toBe(3)
    // expect(result1).toBe(['how', 'are', 'you'])
    expect(result1[0]).toBe('how')
    expect(result1[1]).toBe('are')
    expect(result1[2]).toBe('you')

    expect(result2.length).toBe(4)
    // expect(result2).toBe(['i', 'am', 'you', 'thanks'])
    expect(result2[0]).toBe('i')
    expect(result2[1]).toBe('am')
    expect(result2[2]).toBe('ok')
    expect(result2[3]).toBe('thanks')
})
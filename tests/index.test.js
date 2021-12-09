const add = require('./index.js').add

test('1 + 1 は 2 である', () => {
  expect(1 + 1).toBe(2)
})

test('add 関数のテスト', () => {
  expect(add(1, 2)).toBe(3)
})

describe('1,000未満の全ての正の整数について、各桁の和が3の倍数ならその整数は3の倍数になる', () => {
  for (let i = 1; i < 1000; i++) {
    const a1 = Math.floor(i / 100) // 100 の位
    const a2 = Math.floor((i - a1) / 10) // 10 の位
    const a3 = i - a1 - a2 // 1 の位
    const sum = a1 + a2 + a3
    if (sum % 3 === 0) {
      test(i + 'は3の倍数', () => expect(i % 3).toBe(0))
    }
  }
})

test('オブジェクトが等しい', () => {
  const a = { hello: 'world' }
  const b = { hello: 'world' }
  expect(a).toEqual(b)
})

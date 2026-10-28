import { act, render } from '@testing-library/react'
import Typing from './Typing'

describe('Typing', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  const typed = (container) => container.firstChild.textContent.replace(/\|$/, '')

  test('starts empty', () => {
    const { container } = render(<Typing text='Hi' delay={10} />)
    expect(typed(container)).toBe('')
  })

  test('types one letter at a time', () => {
    const { container } = render(<Typing text='Hi' delay={10} />)
    act(() => vi.advanceTimersByTime(10))
    expect(typed(container)).toBe('H')
    act(() => vi.advanceTimersByTime(10))
    expect(typed(container)).toBe('Hi')
  })

  test('stops at the end of the text', () => {
    const { container } = render(<Typing text='Hi' delay={10} />)
    for (let i = 0; i < 5; i++) act(() => vi.advanceTimersByTime(10))
    expect(typed(container)).toBe('Hi')
    expect(vi.getTimerCount()).toBe(0)
  })
})

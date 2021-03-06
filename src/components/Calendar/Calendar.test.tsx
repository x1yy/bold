import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { createTheme } from '../../styles'

import * as CalendarModule from './Calendar'
import { Calendar, createDayStylesFn, defaultModifiers, defaultModifierStyles } from './Calendar'
import { isSameDay } from './util'

describe('Calendar', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Calendar
        visibleDate={new Date('2018-10-26')}
        onVisibleDateChange={jest.fn()}
        modifiers={{
          selected: (day: Date) => isSameDay(day, new Date('2018-10-27')),
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should change visibleDate when year is changed', () => {
    const visibleDateChange = jest.fn()
    const { getByTitle } = render(
      <Calendar visibleDate={new Date('2018-10-26')} onVisibleDateChange={visibleDateChange} />
    )
    const nextYearButton = getByTitle('Next year')

    expect(visibleDateChange).not.toHaveBeenCalled()
    fireEvent.click(nextYearButton)
    expect(visibleDateChange).toHaveBeenCalledWith(new Date('2019-10-26'))
  })

  it('should change visibleDate when month is changed', () => {
    const visibleDateChange = jest.fn()
    const { getByTitle } = render(
      <Calendar visibleDate={new Date('2018-10-26')} onVisibleDateChange={visibleDateChange} />
    )
    const nextMonthButton = getByTitle('Next month')

    expect(visibleDateChange).not.toHaveBeenCalled()
    fireEvent.click(nextMonthButton)
    expect(visibleDateChange).toHaveBeenCalledWith(new Date('2018-11-26'))
  })

  it('should change visibleDate when day is clicked', () => {
    const visibleDateChange = jest.fn()
    const { container } = render(
      <Calendar visibleDate={new Date('2018-10-26')} onVisibleDateChange={visibleDateChange} />
    )
    const dateOfPreviousMonthButton = container.querySelector('[data-date="2018-09-30"] span')

    expect(visibleDateChange).not.toHaveBeenCalled()
    fireEvent.click(dateOfPreviousMonthButton)
    expect(visibleDateChange).toHaveBeenCalledWith(new Date('2018-09-30'))
  })

  it('should call onDayClick when day is clicked', () => {
    const click = jest.fn()
    const { container } = render(
      <Calendar visibleDate={new Date('2018-10-26')} onVisibleDateChange={jest.fn()} onDayClick={click} />
    )
    const dateButton = container.querySelector('[data-date="2018-10-01"] span')

    expect(click).not.toHaveBeenCalled()
    fireEvent.click(dateButton)
    expect(click).toHaveBeenCalledWith(new Date('2018-10-01'))
  })

  it('should accept modifiers and modifierStyles props', () => {
    const spy = jest.spyOn(CalendarModule, 'createDayStylesFn')
    const customModifiers = {
      today: () => true,
      custom: () => false,
    }
    const customStyles = {
      today: () => ({ color: 'red' }),
      custom: () => ({ backgroundColor: 'pink' }),
    }
    expect(spy).not.toHaveBeenCalled()
    render(
      <Calendar
        visibleDate={new Date('2018-10-26')}
        onVisibleDateChange={jest.fn()}
        modifiers={customModifiers}
        modifierStyles={customStyles}
      />
    )
    expect(spy).toHaveBeenCalledWith(
      { ...defaultModifiers, ...customModifiers },
      { ...defaultModifierStyles, ...customStyles },
      expect.anything()
    )
  })
})

describe('modifiers', () => {
  describe('today', () => {
    it('should return true if date is today', () => {
      expect(defaultModifiers.today(new Date(), {} as any)).toBeTruthy()
      expect(defaultModifiers.today(new Date('1970-01-01'), {} as any)).toBeFalsy()
    })
  })
  describe('adjacentMonth', () => {
    it('should return true if date is next or prev month', () => {
      expect(
        defaultModifiers.adjacentMonth(new Date('2018-10-01'), { visibleDate: new Date('2018-10-01') })
      ).toBeFalsy()
      expect(
        defaultModifiers.adjacentMonth(new Date('2018-10-01'), { visibleDate: new Date('2018-09-01') })
      ).toBeTruthy()
      expect(
        defaultModifiers.adjacentMonth(new Date('2018-10-01'), { visibleDate: new Date('2018-11-01') })
      ).toBeTruthy()
    })
  })
  describe('selected', () => {
    it('should return false by default', () => {
      expect(defaultModifiers.selected(new Date(), {} as any)).toBeFalsy()
    })
  })
  describe('disabled', () => {
    it('should return false by default', () => {
      expect(defaultModifiers.disabled(new Date(), {} as any)).toBeFalsy()
    })
  })
})

describe('modifierStyles', () => {
  const theme = createTheme()

  it('should have "today" styles', () => {
    expect(defaultModifierStyles.today(theme)).toMatchSnapshot()
  })

  it('should have "disabled" styles', () => {
    expect(defaultModifierStyles.disabled(theme)).toMatchSnapshot()
  })

  it('should have "selected" styles', () => {
    expect(defaultModifierStyles.selected(theme)).toMatchSnapshot()
  })

  it('should have "adjacentMonth" styles', () => {
    expect(defaultModifierStyles.adjacentMonth(theme)).toMatchSnapshot()
  })
})

describe('createDayStylesFn', () => {
  it('should return merged styles from all modifiers that apply', () => {
    const theme = createTheme()
    const stylesCreator = createDayStylesFn(
      {
        today: () => true,
        disabled: () => true,
        adjacentMonth: () => true,
        selected: () => true,
      },
      defaultModifierStyles,
      theme
    )
    expect(stylesCreator(new Date(), {} as any)).toMatchSnapshot()
  })
})

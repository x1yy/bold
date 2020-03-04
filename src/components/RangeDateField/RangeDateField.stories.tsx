import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { RangeDate } from './BaseRangeDateInput'
import { RangeDateField } from './RangeDateField'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: RangeDate = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components|RangeDateField ', module)
  .add('default', () => (
    <RangeDateField
      clearable={boolean('clearable', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      value={period}
    />
  ))

  .add('min/max date', () => (
    <RangeDateField
      clearable={boolean('clearable', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      minDate={todayMinus10}
      maxDate={new Date()}
    />
  ))

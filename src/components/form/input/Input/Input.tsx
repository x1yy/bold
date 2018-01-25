import * as React from 'react'
import { ChangeEvent, FocusEvent } from 'react'
import { EventOrValueHandler } from 'redux-form'

export interface InputProps {
  className?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  maxLength?: number
  name?: string
  onBlur?: EventOrValueHandler<FocusEvent<any>>
  onChange?: EventOrValueHandler<ChangeEvent<any>>
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: any
}

export class Input extends React.Component<InputProps, any> {
  private input: HTMLInputElement

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  render() {
    return (
      <input ref={this.ref} {...this.props} />
    )
  }

  private ref = (elem: HTMLInputElement) => {
    this.input = elem
  }

}

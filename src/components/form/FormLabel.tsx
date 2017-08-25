import * as React from 'react'
import { ErrorIndicator } from './ErrorIndicator'
import { Icon } from '../elements/Icon'
import { Label } from '../elements/Label'

export interface FormLabelProps {
    error?: any
    label?: string
    required?: boolean
    disabled?: boolean
}

export class FormLabel extends React.Component<FormLabelProps, any> {

    render() {
        const errorIndicator = (
            this.props.error && <ErrorIndicator error={this.props.error} />
        )

        const fieldRequired = (
            this.props.required && !this.props.error && <Icon className='field-required' size='small' icon='obrigatorio' />
        )

        return (
            <Label disabled={this.props.disabled}>
                <span>{this.props.label}</span>
                {fieldRequired}
                {errorIndicator}
            </Label>
        )
    }

}

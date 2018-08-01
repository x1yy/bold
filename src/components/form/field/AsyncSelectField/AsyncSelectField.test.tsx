import { mount } from 'enzyme'
import * as React from 'react'

import { withRouter, withTheme } from '../../../../test'
import { Form, FormProps } from '../../finalForm/Form'

import { AsyncSelectField, AsyncSelectFieldProps } from './AsyncSelectField'

const options = [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
]

const getPage = () => {
    return Promise.resolve(options)
}

const createFormAndField = (fieldProps?: Partial<AsyncSelectFieldProps>, formProps?: Partial<FormProps>) => {
    // tslint:disable jsx-no-lambda
    return mount(withTheme(withRouter(
        <Form
            onSubmit={jest.fn()}
            initialValues={{ select1: options[0] }}
            {...formProps}
            render={() => (
                <AsyncSelectField name='select1' getPage={getPage} {...fieldProps} />
            )}
        />
    )))
}

describe('render', () => {
    it('should render correctly', () => {
        expect(createFormAndField().render()).toMatchSnapshot()
    })
    it('should render correctly when multivalue', () => {
        expect(createFormAndField({ multi: true }, { initialValues: { select1: options } }).render()).toMatchSnapshot()
    })
})

describe('convert', () => {
    // tslint:disable no-string-literal
    it('should convert value to valueKey if convertToValueKey prop is true', () => {
        const wrapper = createFormAndField()
        const select = wrapper.find(AsyncSelectField).instance()
        expect(select['convert'](options[0])).toEqual(1)
    })
    it('should NOT convert value if convertToValueKey is false', () => {
        const wrapper = createFormAndField({ convertToValueKey: false })
        const select = wrapper.find(AsyncSelectField).instance()
        expect(select['convert'](options[1])).toEqual(options[1])
    })
})

import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { PagedTable } from './PagedTable'

interface Row {
    id: number
    name: string
    age: number
}

const rows: Row[] = [
    { id: 1, name: 'MARIA MACHADO DE JESUS', age: 42 },
    { id: 2, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
    { id: 3, name: 'ALICE BARBOSA', age: 27 },
]

const sortHandler = jest.fn()
const pageHandler = jest.fn()
const sizeHandler = jest.fn()
const table = withTheme(
    // tslint:disable jsx-no-lambda
    <PagedTable
        rows={rows}
        page={0}
        size={10}
        totalPages={1}
        totalElements={3}
        sort={['-id', 'name']}
        onSortChange={sortHandler}
        onPageChange={pageHandler}
        onSizeChange={sizeHandler}
        columns={[
            { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
            { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
            { name: 'age', header: 'Age', render: (row: Row) => row.age },
        ]}
    />
)

it('should render correctly', () => {
    expect(render(table)).toMatchSnapshot()
})
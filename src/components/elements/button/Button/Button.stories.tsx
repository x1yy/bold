import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { Button, Size, Type } from './Button'
import { Skins } from './ButtonSkins'

const typeOptions: {[key in Type]: string} = {
    'normal': 'normal',
    'primary': 'primary',
}

const skinOptions: {[key in Skins]: string} = {
    'default': 'default',
    'ghost': 'ghost',
    'secondary': 'secondary',
}

const sizeOptions: {[key in Size]: string} = {
    'small': 'small',
    'medium': 'medium',
}

storiesOf('Components', module)
    .addDecorator(withPropTypes(`
    Botões expressam que alguma atividade vai acontecer quando o usuário clicar nele.
    São usados para iniciar uma ação, alguns exemplos incluem a ação de Adicionar, Salvar, Deletar.

    ### BOAS PRÁTICAS:
    - Não use botões como elementos de navegação. Use Links ao invés,  porque levam o usuário a uma
    nova página que não está associada com a ação.
    - A label do botão indica ao usuário o que vai acontecer quando ele clicar no botão.
    Use somente verbos que descrevem a ação, como Adicionar ou Deletar. As labels devem seguir o
    padrão Capitalized (apenas a primeira letra na palavra em maiúsculo).
    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Button', () => (
        <Button
            disabled={boolean('disabled', false)}
            label={text('label', 'Button')}
            loading={boolean('loading', false)}
            skin={select('skin', skinOptions, 'default')}
            size={select('size', sizeOptions, 'medium')}
            type={select('type', typeOptions, 'normal')}
        />
    ))

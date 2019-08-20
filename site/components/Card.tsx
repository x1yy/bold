import React from 'react'

import { Cell, HFlow, Icon, Icons, Text, Theme, useStyles } from '../../lib'

export interface CardProps {
  icon: Icons
  children: React.ReactNode
}

export function Card(props: CardProps) {
  const { icon, children } = props
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.card}>
      <HFlow alignItems='center' hSpacing={0.25}>
        <Cell>
          <Icon icon={icon} fill='primary' size={3} />
        </Cell>
        <Cell>
          <Text component='p' fontSize={1.15} color='primary'>
            {children}
          </Text>
        </Cell>
      </HFlow>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  card: {
    color: theme.pallete.gray.c10,
    backgroundColor: theme.pallete.primary.c90,
    borderRadius: 4,
    maxWidth: '850px',
    margin: '1rem 0',
    padding: '0.75rem',
    border: `1px solid ${theme.pallete.primary.c40}`,
  } as React.CSSProperties,
})

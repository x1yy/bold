import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles/withStyles'
import { Heading } from '../Heading/Heading'

export interface HeadingSectionProps extends WithStylesProps {
    title: React.ReactNode
    level: 1 | 2 | 3 | 4 | 5 | 6
}

@withStyles
export class HeadingSection extends React.Component<HeadingSectionProps> {
    render() {
        const { css } = this.props
        const styles = {
            section: {
            },
            title: {
                lineHeight: '1',
                margin: '0 0.5rem 1rem 0.5rem',
            },
        }

        return (
            <div className={css(styles.section)}>
                <Heading level={this.props.level} style={styles.title}>{this.props.title}</Heading>
                {this.props.children}
            </div>
        )
    }
}

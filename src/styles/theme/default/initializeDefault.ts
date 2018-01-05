import cssGlobal from '../../cssGlobal'
import normalizeCss from '../../normalizeCss'
import Theme from '../Theme'

export default function initializeDefault(theme: Theme) {
    cssGlobal({
        html: {
            fontSize: theme.font.textSize,
            fontFamily: theme.font.textFamily,
        },
    })
    cssGlobal(normalizeCss)
}

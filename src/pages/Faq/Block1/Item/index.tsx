import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import Card, {CardTitle, CardContent} from '../../../../components/Card'


interface props {
    index: number
    title: string
    content: React.ReactElement
    setActiveQuestion: CallableFunction
    active?: boolean
}


export default function Item(props: props) {
    return <Card className={css.item}>
        <CardContent>
            <div className={css.itemInner}>
                <div className={css.itemTop}>
                    <div className={css.itemTitle}>
                        <CardTitle>
                            {props.title}
                        </CardTitle>
                    </div>
                    <div className={css.itemButtonClose} onClick={ () => props.setActiveQuestion(props.index)}>
                        <img className={css.itemIconClose} src={iconClose}/>
                    </div>
                </div>
            </div>
        </CardContent>
            {
                props.active &&
                <CardContent className={css.itemContent}>
                    Difference between hyaluronic acid and botox is how they effect the skin. Hyaluronic acid is injected under the skin, while botox is injected into the muscle.
                    <br /><br />
                    Botox relaxes muscles and relieves tension, thereby smoothing wrinkles. Botox lasts from 4-6 months. Hyaluronic acid effects the skin somewhat differently. It keeps water in the skin cells, giving it elasticity and tightness. Hyaluronic acid lasts from 8-12 months.
                    <br /><br />
                    ”The main purpose of hyaluronic acid is a water saturation of our skin. Strange, but true: one molecule of hyaluronic acid can keep up to five hundred of water molecules.”
                </CardContent>
            }
    </Card>
}
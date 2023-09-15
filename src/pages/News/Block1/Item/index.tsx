import css from './index.module.scss'

import arrow from '../../../../assets/components/news-arrow.png'

import { Link } from 'react-router-dom'

import Card, {CardContent, CardTitle} from '../../../../components/Card'

interface props
{
    index: number
    title: string
    setActive: CallableFunction
    active: boolean
}

export default function Item(props: props) {

    return <div className={css.item}>
        <Card>
            <CardContent>
                <CardTitle>Post title</CardTitle>
                <Link to='/news/1' className={css.itemButtonLink} onClick={ () => props.setActive(props.index) }>
                    <img className={css.itemIconClose} src={arrow}/>
                </Link>
                <div className={css.content}>
                    Oletko katsonut peiliin ja miettinyt, että toivoisit kapeampia kasvoja? Nykymaailmassa oikeastaan ihan kaikenlainen kasvojen muokkaaminen onnistuu ilman valtavia kustannuksia ja pitkää toipumisaikaa. Se on oikeastaan sitten vain oman pohdinnan paikka, mitä haluaa tehdä, miksi ja mitä sillä saavuttaa. Kauneuskirurgia ei ole kenellekään mikään uhka tai minkäänlainen pimeä voima kuin vaan olet turvallisissa käsissä. Palvelua voi
                </div>
            </CardContent>
        </Card> 
    </div>
        
}
import css from './index.module.scss'

import axios from 'axios'
import { useQuery } from 'react-query'
import Markdown from 'react-markdown'

import bgLayer from '../../../assets/components/ourteam-bglayer1.png'

import Heading from '../../../components/Heading'
import Container from '../../../components/Container'
import Card from '../../../components/Card'

export default function Block() {
    const {data} = useQuery('specialists', {
        queryFn: async () => {
            const {data} = await axios.get('https://preview.hoolisoftware.xyz/api/clinic/specialists/')
            return data
        }
    })

    return (
        <div className={css.block}>
            <img className={css.bgLayer} src={bgLayer} alt="" />
            <Container>
                <div className={css.heading}>
                    <Heading center>Наши специалисты</Heading>
                </div>
                <div className={css.cards}>
                    {
                        Array.isArray(data) && data.map(item =>
                            <Card className={css.card}>
                                <div className={css.cardInner}>
                                    <img className={css.cardImage} src={item.photo}/>
                                    <div className={css.cardName}>{item.full_name}</div>
                                    <div className={css.cardPosition}>
                                        {item.position}
                                    </div>
                                </div>
                                <div className={css.cardHr}></div>
                                <div className={css.cardInner}>
                                    <div className={css.cardContent}>
                                        <Markdown>
                                            {item.about}
                                        </Markdown>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}
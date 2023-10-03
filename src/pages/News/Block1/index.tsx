import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { useQuery } from 'react-query'

import Heading from '../../../components/Heading'
import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

import Item from './Item'
import axios from 'axios'


interface Post{
    id: number
    title: string
    excerpt: string
    categories: string[]
}

export default function Block() {
    const {data} = useQuery<Post[]>('news', {
        queryFn: async () => {
            const {data} = await axios.get('http://127.0.0.1:8000/api/blog/posts/')
            return data
        }
    })

    return <Container>
        <div className={css.heading}>
            <Heading center >Новости</Heading>
        </div>
        <div className={css.section}>
            <div className={css.sectionBlock}>
                {
                    Array.isArray(data) && data?.map((item) =>
                        <Item
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            excerpt={item.excerpt}
                        />
                    )
                }
            </div>
            <div className={css.sectionBlock}>
                <Card>
                    <CardContent>
                        <div className={css.cardContent}>
                            <CardTitle>
                                <div className={css.cardTitle}>Поиск по новостям</div>
                            </CardTitle>
                            <Input
                                placeholder='Что нужно найти?'
                                type='text'
                                fullWidth
                            />
                            <Button fullWidth>
                                ПОИСК
                                &nbsp;
                                <img src={arrow} alt="arrow" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}
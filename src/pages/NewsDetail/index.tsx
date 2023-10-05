import css from './index.module.scss'

import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'react-markdown'

import { API_URL } from '@/config'
import type { Post } from '@/types'
import iconFacebook from '../../assets/components/newsdetail-iconfacebook.png'
import iconYoutube from '../../assets/components/newsdetail-iconyoutube.png'

import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Card, {CardContent} from '../../components/Card'

export default function Page() {
    const {id} = useParams()
    const {data} = useQuery<Post>('post_detail', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}blog/posts/${id}/`)
            return data
        }
    })

    return <>
        <PageLayout
            title={data?.title}
        >
            <WrapperFirstBlock>
                <Container>
                    <div className={css.heading}>
                        <Heading center>{data?.title}</Heading>
                    </div>
                    <div className={css.postMeta}>
                        {
                            data?.author &&
                            <div className={css.postMetaAuthor}>
                                {
                                    data?.author.first_name && data?.author.last_name ?
                                    `${data?.author?.first_name} ${data?.author?.last_name}` :
                                    data?.author.username
                                }
                            </div>
                        }
                        <div className={css.postMetaDivider}></div>
                        <div>
                            {data?.created}
                        </div>
                        <div className={css.postMetaDivider}></div>
                        <div>
                            {
                                data?.categories?.map(item=>item)
                            }
                        </div>
                    </div>
                    <a href='/news' className={css.link}>{'<'} Назад</a>
                    <br />
                    <br />
                    <div className={css.content}>
                        <Card>
                            <img src={data?.image} className={css.image} />
                            <CardContent>
                                <Markdown>
                                    {data?.content}
                                </Markdown>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={css.share}>
                        Поделиться постом:
                        <div className={css.shareLinks}>
                            <img src={iconFacebook} alt="facebook icon" />
                            <img src={iconYoutube} alt="youtube icon" />
                        </div>
                    </div>
                </Container>
            </WrapperFirstBlock>
        </PageLayout>
    </>
}
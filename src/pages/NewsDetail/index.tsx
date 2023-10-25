import css from './index.module.scss'

import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'

import iconFacebook from '../../assets/components/newsdetail-iconfacebook.png'
import iconYoutube from '../../assets/components/newsdetail-iconyoutube.png'

import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Card, {CardContent} from '../../components/Card'
import { usePost } from '@/hooks/use-query/news'
import getTranslatedField from '@/utils/getTranslatedField'

export default function Page() {
    const {id} = useParams()
    const {data} = usePost(id)

    const { t, i18n } = useTranslation()

    return <>
        <PageLayout
            title={String(data?.title)}
        >
            <WrapperFirstBlock>
                <Container>
                    <div className={css.heading}>
                        <Heading center>{ data && getTranslatedField(data, 'title', i18n.language) }</Heading>
                    </div>
                    <div className={css.postMeta}>
                        {
                            (data?.author) &&
                            <div className={css.postMetaAuthor}>
                                {
                                    data?.author?.first_name && data?.author.last_name ?
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
                                data?.categories?.map((item)=>getTranslatedField(item, 'name', i18n.language))
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
                                    { data && getTranslatedField(data, 'content', i18n.language) }
                                </Markdown>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={css.share}>
                        { t('Поделиться постом') }:
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
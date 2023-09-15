import css from './index.module.scss'

import iconFacebook from '../../assets/components/newsdetail-iconfacebook.png'
import iconYoutube from '../../assets/components/newsdetail-iconyoutube.png'

import PageLayout from '../../components/PageLayout'

import WrapperFirstBlock from '../../components/WrapperFirstBlock'
import Container from '../../components/Container'

import Heading from '../../components/Heading'
import Card, {CardContent} from '../../components/Card'

export default function Page() {
    document.title = 'Post Page'

    return <>
        <PageLayout>
            <WrapperFirstBlock>
                <Container>
                    <div className={css.heading}>
                        <Heading center>Buccaloplastia Clinic Esteticissa</Heading>
                    </div>
                    <div className={css.postMeta}>
                        <div className={css.postMetaAuthor}>
                            by Sofia Kazakov
                        </div>
                        <div className={css.postMetaDivider}></div>
                        <div>
                            11.06.2018
                        </div>
                        <div className={css.postMetaDivider}></div>
                        <div>
                            Estetic, Uncategorized
                        </div>
                    </div>
                    <div className={css.content}>

                        <Card>
                            <CardContent>
                                <p>
                                    Post content here
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aspernatur ipsam esse cumque, nostrum mollitia, reprehenderit asperiores et voluptate veritatis quis iure ullam ipsum eveniet voluptatem necessitatibus quod repudiandae laudantium?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus nihil repellendus perferendis odit voluptates delectus sint corrupti quidem. Fugiat dicta recusandae totam tempore voluptates ab reiciendis quam itaque velit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste ullam iure, doloremque distinctio fuga autem tempora mollitia quas itaque, totam, eaque quibusdam non. Quo porro sint optio mollitia magni.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, reprehenderit iure suscipit culpa, ratione officia odit ullam at rerum, quo animi a! Deserunt eligendi enim rem quae numquam magnam voluptatem!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed tempore maxime ipsum deleniti et non, libero aliquid cumque commodi assumenda voluptate hic distinctio nisi labore eaque a nemo? Sit, praesentium.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo aspernatur ipsa exercitationem vitae facilis vero repellendus sit. Aperiam culpa molestiae atque minima. Iusto, fuga ratione itaque autem porro mollitia officia.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat, deleniti accusantium dolor officiis minima aliquam autem animi tenetur numquam eveniet fuga iusto quidem earum, omnis et dolorem consequatur debitis.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt cumque ad corporis iste ea repudiandae aperiam delectus fuga libero voluptatibus reiciendis sit nam, optio sed error possimus est facilis.</p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nostrum, non corporis, incidunt facere voluptas quidem atque nihil ad in itaque ab deserunt magnam dolorum sequi eos asperiores. Aliquid, quam.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={css.share}>
                        Share this post:
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
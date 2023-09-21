import css from './index.module.scss'

import arrow from '../../../assets/components/home-block8-arrow.png'

import bg from '../../../assets/components/home-block8-bg.png'

import Heading from '../../../components/Heading'
import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

export default function Block(){
    return <div className={css.block}>
        <img className={css.bg} src={bg} alt="bg" />
        <Container className={css.container}>
            <Heading center>
                <div className={css.heading}>Вы можете оставить нам сообщение</div>
            </Heading>
            <Card className={css.form}>
                <CardContent>
                    <div className={css.formInner}>
                        <Input
                            type='text'
                            placeholder='Ваше имя*'
                            fullWidth
                        />
                        <Input
                            type='text'
                            placeholder='Ваш телефон*'
                            fullWidth
                        />
                        <textarea className={css.formTextarea} placeholder='Сообщение' ></textarea>
                        <Button fullWidth>
                            Оставить сообщение&nbsp;
                            <img className={css.formButtonArrow} src={arrow} alt="arrow" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Container>
    </div>
}
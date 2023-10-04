import css from './index.module.scss'

import axios from 'axios'
import { useMutation } from 'react-query'
import { AiFillCheckCircle } from 'react-icons/ai'

import arrow from '../../../assets/components/home-block8-arrow.png'
import bg from '../../../assets/components/home-block8-bg.png'
import Heading from '../../../components/Heading'
import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'


export default function Block(){
    const mutation = useMutation({
        mutationFn: async (newFeedbackForm: FormData) => {
            return axios.post('https://preview.hoolisoftware.xyz/api/booking/form-feedback/', newFeedbackForm)
        }
    })

    return <div className={css.block}>
        <img className={css.bg} src={bg} alt="bg" />
        <Container className={css.container}>
            <Heading center>
                <div className={css.heading}>Вы можете оставить нам сообщение</div>
            </Heading>
            <Card className={css.form}>
                <CardContent>
                    <form onSubmit={ e => {e.preventDefault(); mutation.mutate(new FormData(e.currentTarget))} }>
                        <div className={css.formInner}>
                            <Input
                                type='text'
                                placeholder='Ваше имя*'
                                name='full_name'
                                fullWidth
                                disabled={mutation.isSuccess}
                                required
                            />
                            <Input
                                type='text'
                                placeholder='Ваш телефон*'
                                name='phone_number'
                                fullWidth
                                disabled={mutation.isSuccess}
                                required
                            />
                            <textarea className={css.formTextarea} name='message' placeholder='Сообщение' disabled={mutation.isSuccess} required></textarea>
                            <Button fullWidth>
                                Оставить сообщение&nbsp;
                                <img className={css.formButtonArrow} src={arrow} alt="arrow" />
                            </Button>
                            {
                                mutation.isSuccess &&
                                <p>
                                    <AiFillCheckCircle/>
                                    &nbsp;
                                    Заявка отправлена, мы свяжемся с вами!
                                </p>
                            }
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    </div>
}
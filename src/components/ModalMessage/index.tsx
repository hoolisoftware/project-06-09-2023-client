import css from './index.module.scss'

import arrow from '../../assets/components/news-arrow.png'

import { API_URL } from '@/config'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { useMutation } from 'react-query'
import FormData from "form-data";

import { AiOutlineCloseCircle, AiFillCheckCircle } from 'react-icons/ai'

import {RootState} from '../../app/store'
import { toggleModalMessage } from '../../features/modal/modalReducer'

import Heading from '../Heading'
import Card, {CardContent} from '../Card'
import Input from '../Input'
import Button from '../Button'


export default function Modal() {
    const mutation = useMutation({
        mutationFn: async (newFeedbackForm: FormData) => {
            return axios.post(`${API_URL}booking/form-feedback/`, newFeedbackForm)
        }
    })
    const modalMessage = useSelector((state: RootState) => state.modal.modalMessage)
    const dispatch = useDispatch()

    return <div className={
        [
            css.container,
            modalMessage && css.containerActive
        ].join(' ')
    }>
        <div className={css.bg} onClick={ () => dispatch(toggleModalMessage()) }></div>
        <Card className={css.modal}>
            <form onSubmit={ e => {e.preventDefault(); mutation.mutate(new FormData(e.currentTarget))} }>
                <CardContent>
                    <div className={css.buttonClose} onClick={() => dispatch(toggleModalMessage())}>
                        <AiOutlineCloseCircle/>
                    </div>
                    <div className={css.heading}>
                        <Heading>Получите консультацию по интересующему вас вопросу!</Heading>
                    </div>
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
                        placeholder='Ваш телефон'
                        name='phone_number'
                        fullWidth
                        disabled={mutation.isSuccess}
                        required
                    />
                    <Button disabled={mutation.isSuccess} fullWidth>Оставить сообщение&nbsp;&nbsp;<img className={css.arrow} src={arrow} alt="arrow" /></Button>
                    <br />
                    {
                        mutation.isSuccess &&
                        <p>
                            <AiFillCheckCircle/>
                            &nbsp;
                            Заявка отправлена, мы свяжемся с вами!
                        </p>
                    }
                </CardContent>
            </form>
        </Card>
    </div>
}
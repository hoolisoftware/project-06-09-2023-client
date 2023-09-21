import css from './index.module.scss'

import arrow from '../../assets/components/news-arrow.png'

import {useSelector, useDispatch} from 'react-redux'

import { AiOutlineCloseCircle, AiFillCheckCircle } from 'react-icons/ai'

import {RootState} from '../../app/store'
import { toggleModalMessage } from '../../features/modal/modalReducer'

import Heading from '../Heading'
import Card, {CardContent} from '../Card'
import Input from '../Input'
import Button from '../Button'


export default function Modal() {
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
            <CardContent>
                <div className={css.buttonClose} onClick={() => dispatch(toggleModalMessage())}>
                    <AiOutlineCloseCircle/>
                </div>
                <div className={css.heading}>
                    <Heading>Вы можете оставить нам сообщение!</Heading>
                </div>
                <Input
                    type='text'
                    placeholder='Ваше имя*'
                    fullWidth
                />
                <Input
                    type='number'
                    placeholder='Ваш телефон'
                    fullWidth
                />
                <Button fullWidth>Оставить сообщение&nbsp;&nbsp;<img className={css.arrow} src={arrow} alt="arrow" /></Button>
                <br />
                <p>
                    <AiFillCheckCircle/>
                    &nbsp;
                    Заявка отправлена, мы свяжемся с вами!
                </p>
            </CardContent>
        </Card>
    </div>
}
import { useDispatch, useSelector } from 'react-redux'

import css from './index.module.scss'
import { RootState } from '@/app/store'
import { toggleModalRecaptcha } from '@/features/modal/modalReducer'
import { setRecaptcha } from '@/features/data/dataReducer'
import FieldRecaptcha from '@/components/FieldRecaptcha'

export default function ModalRecaptcha() {
    const active = useSelector((state: RootState) => state.modal.modalRecaptcha)
    const dispatch = useDispatch()

    return (
        <div 
            onClick={ () => dispatch(toggleModalRecaptcha()) }
            className={
                [
                    css.blur,
                    active && css.blurActive
                ].join(' ')
            }
        >
            <div className={css.modal}>
                <FieldRecaptcha onChange={ (value) => {dispatch(setRecaptcha(value)); dispatch(toggleModalRecaptcha())} }/>
            </div>
        </div>
    )
}
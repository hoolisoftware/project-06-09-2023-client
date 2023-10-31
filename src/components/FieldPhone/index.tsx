import css from '@components/Input/index.module.scss'
import { Props as InputProps } from '@components/Input';

import { useState } from 'react'
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';


export interface Props extends InputProps
{

}



export default function FieldPhone(props: Props) {
    const [phone, setPhone] = useState('');

    const {i18n, t} = useTranslation()

    const getMask = () => {
        const masks = {
            ru: '+9 (999) 999-99-99',
            fin: '+ 999-99-999-99-99',
        }
        return masks[i18n.language as ('ru' | 'fin')] || '+ 9 (999) 999-99-99'
    }

    return (
        <>
            <InputMask
                {...props}
                mask={ getMask() }
                value={phone}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setPhone(e.currentTarget.value)}
                className={
                    [
                        css.input,
                        props.className,
                        props.fullWidth && css.fullWidth

                    ].join(' ')
                }
                placeholder={t("Home_block7_placeholder")}
            />
        </>
    )
}

// + 999-99-999-99-99 finn
// + 9-999-999-99-99 ru
// + 9-999-999-99-99 usa
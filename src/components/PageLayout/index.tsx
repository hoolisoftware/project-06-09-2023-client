import css from './index.module.scss'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ModalMessage from '@/components/ModalMessage'
import ModalRecaptcha from '@/components/ModalRecaptcha'

interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    title?: string
}

export default function PageLayout(props: Props) {
    document.title = `${props.title ? `${props.title} | ` : ''}Clinic Estetic`

    return <div className={css.layout}>
        <div>
            <Header/>
            {props.children}
        </div>
        <Footer/>
        <ModalMessage/>
        <ModalRecaptcha/>
    </div>
}
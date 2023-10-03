import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Block2 from './Block2'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

export default function Page()
{
    return <PageLayout
        title='Услуги'
    >
        <WrapperFirstBlock>
            <Block2/>
        </WrapperFirstBlock>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}
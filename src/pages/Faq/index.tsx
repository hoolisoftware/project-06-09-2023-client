import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from "../../components/WrapperFirstBlock"

import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

import Block1 from './Block1'

export default function Page()
{
    document.title = 'FAQ'

    return <PageLayout>
        <WrapperFirstBlock>
            <Block1/>
        </WrapperFirstBlock>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}
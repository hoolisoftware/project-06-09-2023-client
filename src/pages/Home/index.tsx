import PageLayout from '../../components/PageLayout'

import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'

import WhyShouldYouContact from '../_CommonBlocks/WhyShouldYouContact'
import ContactForm from '../_CommonBlocks/ContactForm'
import CallForm from '../_CommonBlocks/CallForm'
import HappyClients from '../_CommonBlocks/HappyClients'


export default function Page()
{
    return <PageLayout
    >
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        <WhyShouldYouContact/>
        <HappyClients/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}
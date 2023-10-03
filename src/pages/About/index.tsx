import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Illustration1 from '../_CommonBlocks/Illustration1'
import OurTeam from '../_CommonBlocks/OurTeam'
import Certificates from '../_CommonBlocks/Certificates'
import WhyShouldYourContact from '../_CommonBlocks/WhyShouldYouContact'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

import Block1 from './Block1'


export default function Page()
{
    return <PageLayout
        title='About us'
    >
        <WrapperFirstBlock>
            <Block1/>
        </WrapperFirstBlock>
        <Illustration1/>
        <OurTeam/>
        <Certificates/>
        <WhyShouldYourContact/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}
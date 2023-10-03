import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import OurTeam from '../_CommonBlocks/OurTeam'
import Certificates from '../_CommonBlocks/Certificates'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

export default function Page()
{
    return <PageLayout
        title='Специалисты'
    >
        <WrapperFirstBlock>
            <OurTeam/>
        </WrapperFirstBlock>
        <Certificates/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}
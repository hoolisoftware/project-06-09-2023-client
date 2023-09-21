import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import {useParams} from "react-router-dom"

import getTreatment from '../../data/treatments'

import Intro from '../_CommonBlocks/Intro'
import HappyClients from '../_CommonBlocks/HappyClients'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import Block5 from './Block5'
import Block6 from './Block6'

export default function Page() {
    const {treatmentId} = useParams()
    const treatment = getTreatment(Number(treatmentId))

    document.title = 'Treatment Prices'

    return <PageLayout>
        <WrapperFirstBlock>
            <Intro
                title={treatment?.title}
                illustration={treatment?.image}
            />
        </WrapperFirstBlock>
        { treatment &&
            <Block2 treatment={treatment}/>
        }
        {
            Number(treatmentId) === 1 &&
            <>
                <Block3/>
                <Block4/>
                <Block5/>
                <Block6/>
            </>
        }
        <HappyClients/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}
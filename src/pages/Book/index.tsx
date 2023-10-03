import PageLayout from '../../components/PageLayout'

import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Block from './Block'


export default function Page()
{
    return <PageLayout
        title='Записаться на приём'
    >
        <WrapperFirstBlock>
            <Block/>
        </WrapperFirstBlock>
    </PageLayout>
}
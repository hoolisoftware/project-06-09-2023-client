import illustration from '../../../assets/components/treatmentprices-block3-illustration.jpg'

import Illustration from '../../_CommonBlocks/Illustration'

export default function Block() {
    return <Illustration
        title={<>What you need to know</>}
        content={
            <>
                DOT TherapyTM technology is… the latest innovation in the field of skin rejuvenation!SmartXide DOT – a real alternative to the surgical facelift!
                <br /><br />
                DOT technology is performed with SmartXide DOT CO2 laser system, featuring the unique DOT Scanner with the Infinite Delivery options for ablative skin rejuvenation with rapid healing.
                <br /><br />
                DOT technology is ideal for solving such skin problems as pigmentation, atonic skin texture, wrinkles and acne scars.
                <br /><br />
                This is a possibility of choice This is a possibility of control. This is DOT!
            </>
        }
        illustration={illustration}
    />
}
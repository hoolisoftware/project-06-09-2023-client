import illustration from '../../../assets/components/home-block4-illustration.png'

import Illustration from '../../_CommonBlocks/Illustration'

export default function Block(){
    return <Illustration
        title={
            <>
                We will be glad to see you <br /> in our clinic!
            </>
        }
        subTitle={
            <>
                We work 24/7 and our doorsopen to everyone!
            </>
        }
        content={
            <>
                The international group of clinics “Clinicestetic” takes a leading position in the field of rendering modern high-tech medical services. The main directions of our activity: aesthetic medicine (plastic surgery, cosmetology, dietology, hair transplantation), dentistry, ophthalmology, gynaecology and practology.
                <br /><br />
                We take full responsibility for the health of our patient, that is why we give our preference to the best world technologies and methods of treatment and choose the most efficient procedures for preserving beauty and youth.
            </>
        }
        illustration={illustration}
    />
}
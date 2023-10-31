import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


interface Props {
    onChange: (value: string|null) => void 
}

export default function FieldRecaptcha(props: Props) {
    const [recaptcha, setRecaptcha] = useState('')

    return (
        <>
            <input type="text" value={recaptcha} name='recaptcha' hidden />
            <ReCAPTCHA
                sitekey="6LfTJN8oAAAAAIuxGZP71utUOLHBoYspKyiiygnD"
                onChange={(value: string|null) => {setRecaptcha(value as string); props.onChange(value)}}
            />
        </>
    )
}
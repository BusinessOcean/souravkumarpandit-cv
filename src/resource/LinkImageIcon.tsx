
import Image from 'next/image';
import { urlFor } from "../../sanity/sanity-utils";

function LinkImageIcon(props: any) {
    return (
        <div>
            <Image
                className='w-max h-max object-contain'
                src={urlFor(props.social).url()}
                alt={props.social.alt}
                width="0"
                height="0"
                unoptimized={true}
                style={{ "backgroundBlendMode": 'multiply' }}
            />
        </div>
    );
}

export default LinkImageIcon;

import { ReactElement } from 'react';
import { ImLocation, ImPhone } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
/*eslint-disable */
export type ContactItem = {
    Icon: ReactElement
    text: string
}

export const contactDetails: Array<ContactItem> = [
    {
        Icon: <ImPhone className='text-primary' size={20} aria-hidden='true' />,
        text: '+91 6354793321',
    },
    {
        Icon: (
            <IoIosMail className='text-primary' size={20} aria-hidden='true' />
        ),
        text: 'hexanovate6@gmail.com',
    },
    {
        Icon: (
            <ImLocation className='text-primary' size={20} aria-hidden='true' />
        ),
        text: 'Row House No. 6, "Yugay" S.No. 17/2/1, Near fatcook restaurant, Balewadi, Pune. Maharashtra, India. Pin code: 411045',
    },
]

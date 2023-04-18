import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';


const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <div className='footer-container'>
                <p>{year} - LexdeIT HeadPhones - All rights reserved</p>
                <p className='icons'>
                    <Link href={`https://www.instagram.com/lexteckg/`}>
                        <BsInstagram />
                    </Link>
                    <Link href={`https://www.facebook.com/lexsinver`}>
                        <BsFacebook />
                    </Link>
                    <Link href={`https://twitter.com/lex_teck`}>
                        <BsTwitter />
                    </Link>

                </p>
            </div>
        </>
    )
}

export default Footer;
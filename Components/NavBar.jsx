import Link from "next/link";
import { RiShoppingCartLine } from 'react-icons/ri';


const NavBar = () => {
    return (
        <>
            <div className="navbar-container">
                <p className="logo">
                    <Link href={`/`}>
                        LexdeIT | Headphones
                    </Link>
                </p>

                <button
                    type="button"
                    className="cart-icon"
                    onClick={() => { }}

                >
                    <RiShoppingCartLine />
                    <span className="cart-item-qty">1</span>

                </button>



            </div>
        </>
    )
}

export default NavBar;
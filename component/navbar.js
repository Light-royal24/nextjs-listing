import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>DeLords</h1>
            </div>
            <Link href='/'><span>Home</span></Link>
            <Link href='/about'><span>About</span></Link>
            <Link href='/listing'><span>DeLordsListing</span></Link>
        </nav>
    );
}
 
export default Navbar;
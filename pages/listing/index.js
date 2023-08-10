import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
       props: { lords: data }
    }
}

const Listing = ({ lords }) => {
    console.log(lords)
    return (
        <>
            <Head>
             <title>listingPage</title>
            </Head>
            <div>
                <Navbar />
                <h1>All workers</h1>
                
                <Footer />
            </div>
        </>
    );
}
 
export default Listing;
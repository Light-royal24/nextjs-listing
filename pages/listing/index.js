import Head from 'next/head';
import styles from '../../styles/lords.module.css'
import Link from 'next/link';

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
                <h1>All workers</h1>
                {lords.map((lord) => (
                    <Link href={`/listing/` + lord.id} key={lord.id}>
                        <span className={styles.single}>
                            <h3>{ lord.name }</h3>
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default Listing;
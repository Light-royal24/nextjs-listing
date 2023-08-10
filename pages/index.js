import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Link from "next/link";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
        <Head>
          <title>HomePage</title>
        </Head>
      <div>
        <Navbar />
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, aliquid atque reprehenderit eaque minus delectus. Ducimus minima repudiandae ex, rem reiciendis voluptatem quas cumque sit. Sequi quis iste nobis. Veritatis porro est sit aut deserunt. Omnis, blanditiis facilis aspernatur est minus molestias cum eum et molestiae accusantium consectetur ex minima magni delectus ducimus veritatis veniam natus voluptatem mollitia quia recusandae ipsa sapiente iusto. Totam quis, tenetur at consequuntur eos sit?</p>
        <Link href='/listing'>
          <span className={styles.btn}>
            See DeLords Listing
          </span>
        </Link>
        <Footer />
      </div>
    </>
  );
}
 
export default Home;
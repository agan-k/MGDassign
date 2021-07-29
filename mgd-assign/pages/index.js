import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.sign_in_container}>
           <div className={styles.conn_wallet_wrapper}>
              <button>arrow</button>
              <h1>Connect Wallet</h1>

           </div>
           <h3>You need an Etherium wallet to use Mint Gold Dust.</h3>
           <p>Please connect with one of the available wallets below.</p>
           <div className={styles.metamask_portis_container}>
              <div className={styles.metamask}></div>
              <div className={styles.portis}></div>
           </div>

       </div>

      
    </div>
  )
}

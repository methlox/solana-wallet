import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Head from "next/head";

export const AppBar: FC = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.AppHeader}>
        <Image src="/solanaLogo.png" height={30} width={150} />
        <span>Wallet-Adapter</span>
        <WalletMultiButton />
      </div>
    </>
  );
};

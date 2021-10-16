import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Photos from '../components/Photos';
import Rule from '../components/Rule';
import Footer from '../components/Footer';

export default function Home() {
  const title = 'Jason E. Morris | Re-Elect for Kalamazoo Public School Board';
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Rule container />
      <Photos />
      <Footer />
    </main>
  );
}

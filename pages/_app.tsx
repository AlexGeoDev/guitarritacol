import React from 'react';
import { AppProps } from 'next/app';
import '../global.css';
import Navbar from '../components/navbar/Navbar';
import Wallpaper from '../components/wallpaper/Wallpaper';
import { Footer } from '../components/footer/Footer';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />                 
      <Component {...pageProps} />
      <Footer />   
    </>
  );  
}
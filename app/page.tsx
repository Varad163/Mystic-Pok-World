import Image from "next/image";
import Head from "../components/head";
import Navbar from "@/components/navbar";
import About from "@/components/About";
import Selection from "@/components/Selection";
export default function Home() {
  return (
    <div >
      
     <Navbar  />
     
     <Head />
     <About />
      <Selection />
        
    </div>
  );
}

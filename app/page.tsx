import Image from "next/image";
import Head from "../components/head";
import Navbar from "@/components/navbar";
import About from "@/components/About";
import Selection from "@/components/Selection";
import Battlezone from "@/components/Battlezone";
import Map from "@/components/map";
import Endceremony from "@/components/Endceremony";
import SmoothScrollWrapper from "@/components/scrollwrapper";
export default function Home() {
  return (
    <SmoothScrollWrapper>
    <div >
      
     <Navbar  />
     
     <Head />
     <About />
      <Selection />
        <Battlezone />
        <hr className="border-gray-200 border-t-2 w-full" />
        <Map />
      <hr className="border-gray-200 border-t-2 w-full" />
      <Endceremony />

    </div>
    </SmoothScrollWrapper >
  );
}

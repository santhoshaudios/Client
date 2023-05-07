import Home from "../../components/Home/Home";
import Service from "../../components/Service/Service";
import ContactQuick from "../../components/ContactQuick/ContactQuick";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";
import Gallery from "../../components/Gallery/Gallery"
import About from "../../components/About/About"
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Dealers from "../../components/Dealers/Dealers";
import { Helmet } from 'react-helmet-async';


function LandingPage({data}) {
  const [height, setHeight] = useState();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHeight(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
    <Helmet>
    <title>Santhosh Audios </title>
    <meta
      name="keywords"
      content="santhosh,audios,santhoshaudios,santhosh audios,home,audio service,erode,audio system,home theatre,vehicle audio service"
    />
    <meta name="description" content="Santhosh Audios : Offical webpage santhoshaudios Erode" data-rn="true" />
    <link rel="canonical" href="/"/>
    </Helmet>
    {height>500 &&
      <Navbar floatingNav  />
    }
      {/* Home */}
      <Home data={data.Home} />
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="100%" y1="50%" x2="0%" y2="50%"><stop offset="5%" stopColor="#91d8e4"></stop><stop offset="95%" stopColor="#82aae3"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 70.9282296650718,204.19138755980862 141.8564593301436,208.38277511961724 257,223 C 372.1435406698564,237.61722488038276 531.5023923444975,262.66028708133973 628,267 C 724.4976076555025,271.33971291866027 758.1339712918659,254.9760765550239 845,256 C 931.8660287081341,257.0239234449761 1071.9617224880383,275.43540669856463 1180,269 C 1288.0382775119617,262.56459330143537 1364.0191387559807,231.28229665071768 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>     
      {/* About */}
      <About data={data.About} />
      {/* Service */}
      <Service data={data.Services} />
      {/* Gallery */}
      <Gallery />
      {/* Quotation */}
      
      {/* Dealing products */}
      <Dealers />
      {/* Contact */}
      <ContactQuick data={data.Contact} />
      {/* Top Navigation btn */}
      <TopNavBtn />
    </div>
  )
}

export default LandingPage
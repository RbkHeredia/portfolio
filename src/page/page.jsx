import About from "../components/about";
import ContactPage from "../components/contactPage";
import Experience from "../components/experience";
import Home from "../components/home";
import Technologies from "../components/technologies";


export default function Page(){
  return(
    <div>
      <Home/>
      <About/>
      <Experience/>
      <Technologies/>
      <ContactPage/>
    </div>
  )
}
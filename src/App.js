import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import Header from "./Header";
import SideBar from './SideBar';

function App() {
  return (
    <div className="App" 
    
    style={{
      display:"flex",
      flexDirection:"row",
      

    }}>

      <div className="sidebar"
      style={{width:"20%",marginRight:"20px ",}}>
        <SideBar/>

      </div>

      <div className="rightportion"
      style={{width:"80%"}}>

      <div className="header1">
      <Header/>
        
      </div>

      <div className="Cards"
      style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        display: "grid",
        gridTemplateColumns:" auto auto auto auto",
        gap: "10px",
        
      }}>
        <Cards className="card1" imgLink="https://i.ytimg.com/an_webp/UrsmFxEIp5k/mqdefault_6s.webp?du=3000&sqp=CIOV1LMG&rs=AOn4CLAhH7pssjsJJ4QfLRpPIGPIHVQ-2A" 
        p1="Python Tutorial For Beginners in Hindi | Complete Python Course 🔥" 
        sp1="245K views &#x2022; 5 days ago"/>

        <Cards className="card2" imgLink="https://i.ytimg.com/an_webp/GAVCwdR5Q0s/mqdefault_6s.webp?du=3000&sqp=CI611LMG&rs=AOn4CLDnCPI8bkdPjoTWhh6kHuGY8UWRcA"
        p1="Let's Build an E-Commerce Website using WordPress  Tutorial 🔥"
        sp1="35K views &#x2022; 11 days ago"/>
      
        <Cards className="card3"  imgLink="https://i.ytimg.com/an_webp/eFgoK4GRqiw/mqdefault_6s.webp?du=3000&sqp=CNSw1LMG&rs=AOn4CLDu_aJf8_WkpIcbgkhoXduTEKHzRQ"
        p1="Docker in 2024 | Docker Scout, Docker Build Cloud, Docker Debug"
        sp1="47K views &#x2022; 3 weeks ago"/>

        <Cards className="card4"  imgLink="https://i.ytimg.com/an_webp/vqd9k-N0dOk/mqdefault_6s.webp?du=3000&sqp=CLi61LMG&rs=AOn4CLCsoP7NL4Lk65zK8atdovZEqtGU2g"
        p1="How to make an E-commerce Website in 10 Minutes"
        sp1="58K views &#x2022; 1 month ago"/>

        <Cards className="card5"  imgLink="https://i.ytimg.com/an_webp/RD4JPW6mKaU/mqdefault_6s.webp?du=3000&sqp=CKW_1LMG&rs=AOn4CLButXxFVoTJ8BHW8_xQh9Rv8BuipQ"
        p1="This is How Hackers Crack Passwords! (Don't Try)"
        sp1="471K views &#x2022; 1 month ago"/>

        <Cards className="card6"  imgLink="https://i.ytimg.com/an_webp/2mHrSHi-OWc/mqdefault_6s.webp?du=3000&sqp=CKaz1LMG&rs=AOn4CLBuQOMw88fkdu8nCnd4FTJxpZlGuw"
        p1="Train Your Own Custom AI Chatbot on Custom Data - CustomGPT"
        sp1="37K views &#x2022; 1 month ago"/>

        <Cards className="card7"  imgLink="https://i.ytimg.com/an_webp/Rvr9JFCdDUI/mqdefault_6s.webp?du=3000&sqp=COqi1LMG&rs=AOn4CLBAfiwof7efdD9TQwg7Ew4-Hxl_9A"
        p1="A Mystery box from a Tech Brand | BenQ RD240Q Review🔥"
        sp1="32K views &#x2022; 1 month ago"/>

        <Cards className="card8"  imgLink="https://i.ytimg.com/an_webp/AMxtGWcMYd4/mqdefault_6s.webp?du=3000&sqp=COCm1LMG&rs=AOn4CLDr0cXSU2VdpVrGbhgTXu4ZY1seew"
        p1="AI & ML Roadmap - Complete Roadmap for Machine Learning"
        sp1="216K views &#x2022; 1 month ago"/> 

      </div>

      </div>


      
      
      
    </div>
  );
}

export default App;

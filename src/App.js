
import Contact from "./compo/Contact";
import Education from "./compo/Education";
import Experience from "./compo/Experience";
import Home from "./compo/Home";
import NavBar from "./compo/NavBar";
import Skill from "./compo/Skill";


function App() {
  const srcollById = (id)=>{
    console.log(document.getElementById(id))
		for(var i=0;i<2;i++){
      document.getElementById(id).scrollIntoView({ block: 'center', behavior: 'smooth' });
			document.getElementById(id).style.scrollMarginTop = '200px'
    }
}
  return (
    < >
      <NavBar srcollById={srcollById}></NavBar>

      <div className="container" style={{marginTop:'100px'}}>
        <Home></Home>
        <Skill></Skill>
        <Education></Education>
        <Experience></Experience>
        <Contact></Contact>
      </div>
      
    </>
  );
}

export default App;

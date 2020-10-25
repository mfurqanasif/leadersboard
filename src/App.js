import logo from './logo.svg';
import './App.css';
import Student from './component/Studnet';
function App() {



  
  return (
    <>
    <h1>LeadersBoard</h1>
      <Student name ="M Furqan Asif" uname="Bahria University" score={335} />
      <Student name ="Aman Khalid" uname="Bahria University" score={345} />
      <Student name ="Hamza Arbyani" uname="Bahria University" score={350} />
    </>
  );
}

export default App;

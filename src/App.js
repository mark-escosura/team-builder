import React, { useState } from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers';
import TeamBuilderForm from './components/TeamBuilderForm'


const initialFormValues ={
  name: '',
  email: '',
  role: ''
}

function App() {

  const [TeamMember, setTeamMember] = useState([]);
  const [errorText, setErrorText] =useState('');
 
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue});
  }
 
  const submitForm = () => {
    const newTeamMember ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
   }

   if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
     setErrorText('You have to enter all of the fields!');
     return;

   } else {
     setTeamMember([...TeamMember, newTeamMember ]);
     setFormValues(initialFormValues);

   }

 }
 
 
  return (
    <div className="App">
      
      <h1 className= "container">The Form App</h1>

        <TeamBuilderForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
          errorText={errorText}
        />
      {
        TeamMember.map(mem =>{
          return (
            <TeamMembers key={mem.role} details={mem} />
          )
        })
      }
    </div>
  );
}

export default App;
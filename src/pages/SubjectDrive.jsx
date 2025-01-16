import React, { useState,useEffect } from "react";

import { driveLink } from "../utils/f_config";

const SubjectDrive = () => {

    const [localSubject, setLocalSubject] = useState(JSON.parse(localStorage.getItem('subject')));
    
    const [subject, setSubject] = useState('');

    useEffect(() => {
        if (localSubject && localSubject.length > 0) {
            setSubject(localSubject[0]);
        }
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
        }}>
            <h1 style={{
                marginBottom: '20px',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>Select Your Subject</h1>
            <select 
                onChange={(e) => {
                    setSubject(e.target.value);
                }}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#f2f2f2',
                    color: '#222',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    margin: '10px 0'
                }}
                >
                {localSubject.map((s) => (
                    <option key={s} value={s}>
                        {s}
                    </option>
                ))}
            </select>


            <button 
                onClick={()=>{
                    if(subject === ''){
                        alert('Please select a subject');
                        return;
                    }
                    window.open(driveLink[subject], '_blank');
                    return;
                }}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#b80b92',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    margin: '10px 0'
                }}
            >
                Access {subject} Curriculum
            </button>


            
        </div>
    )
}

export default SubjectDrive;

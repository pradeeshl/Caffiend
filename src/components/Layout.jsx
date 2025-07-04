import {useState} from 'react'
import Modal from './Modal';
import Authentication from './Authentication';

const Layout = (props) => {
    const {children} =props
    const[showModal,setShowModal] =useState(false);
    const header= (        
        <header>
        <div>
            <h1 className="text-gradient">CAFFIEND</h1>
            <p>For Coffee Insatiates</p>
        </div>
        <button onClick={()=>setShowModal(true)}>
            <p>Sign up free</p>
            <i className='fa-solid fa-mug-hot'></i>
        </button>
        </header>
    )
    const footer = (
      <footer>
        <p>
          <span className="text-gradient">Caffiend</span> made by PRADEESH L
        </p>
      </footer>
    );
  return (
   <>
   {showModal && 
   (<Modal handleCloseModal={()=>{setShowModal(false)}}><Authentication /></Modal>)}
   {header}
   <main> 
    {children}
   </main>
  
   {footer}
   
   
   </>
  )
}

export default Layout
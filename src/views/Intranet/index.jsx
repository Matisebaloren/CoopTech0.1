import React from 'react'
import Input from '../../components/Input'
import styles from "./Intranet.module.css";


const Intranet = () => {
  return (
    <div className='w-screen h-screen flex'>
      <img className={styles.bgImg + " mx-auto"} src="src/assets/tecno.jpg" alt="Archivo EPS" />
        <div className='mx-auto rounded-2xl bg-color1 my-auto w-full sm:w-2/3 md:w-1/2 xl:w-1/3 p-8'>

            <Input type='text' placeholder='Nombre de Usuario'/>
            <Input type='password' placeholder='Contraseña'/>
        </div>
    </div>
  )
}

export default Intranet
import React from 'react'
import styles from "./Carrera.module.css"
import Header from '../../components/Header'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const Carrera = () => {
  return (
    <div>
      <Header title="Carrera"/>
      <p className="mx-12 font-extralight text-3xl text-center underline">Kind Job</p>
      <p className="mx-12 font-bold text-2xl">¿Qué buscamos?</p>
      <div className='flex flex-wrap gap-4 my-4 mx-12'> <Caso name="Desarrollador Frontend"/>
        <Caso name="Desarrollador Backend"/>
        <Caso name="Ingeniero de Redes"/>
        <Caso name="Analista de Datos"/>
        <Caso name="Ingeniero Electronico"/>
        <Caso name="Diseñador Grafico"/>
      </div>
      <div className='flex'>
        <button className='mx-auto w-fit bg-blue-400 p-3 text-xl shadow-xl rounded-full'>Ofertas de empleo </button>
      </div>
      
      
     

     
      <div className="flex flex-col m-6 divide-y divide-dashed divide-slate-600">
    
      </div>
    </div>
  )
}


// const MiniCard = ({text}) => {
//   return (
//     <div className="bg-red rounded">{text}</div>
//   )
// }


const Caso = ({ name, content="" }) => {


  return (
    <>
    
        <div className="w-4/5 pl-3 rounded-lg pr-3 bg-orange-400 w-fit">
        <ManageAccountsIcon/>
          <span className="text-xl mb-2">{name}</span>
        </div>

    </>
  );
};


export default Carrera
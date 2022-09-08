
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function Home() {
useEffect(() => {
  

  return () => {
    Hello()
  }
}, [])
function Hello(){
    toast.success('Bem Vindo Admin' ,{
        theme: "dark"
      })
}


  return (
    <div>
        <Topbar/>
    </div>
  )
}

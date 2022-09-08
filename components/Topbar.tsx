import React, { useState } from 'react'
import Sidebar from './Sidebar'


export default function Topbar() {
  const [isOpen, setOpen] = useState('')
  function sidebarHande(){
    if(isOpen == ''){
      return setOpen('open')
    }else{
     return setOpen('')
    }
  }
  return (
    <div className="topbar">
        <div onClick={() => sidebarHande()}className="topbar__title"> <span>Komander.</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
</div>
<Sidebar clasName={isOpen}/>
    </div>
  )
}

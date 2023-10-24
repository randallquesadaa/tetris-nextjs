import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import loader from './img/loading.gif'

const Spinner = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image className='w-10' src={loader} alt='loading../' />
    </div>
  )
}

export default Spinner

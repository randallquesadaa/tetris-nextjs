'use client'
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner'
import Image from 'next/image';

const page = () => {
  const {user} = UserAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 60))
      setLoading(false)
    }
    checkAuthentication()
  }, [user])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : ( user ? (
        <div>
          <p>Hello {user.displayName}</p>
        </div>
      ) : (
        <div>
          <p>Page not found</p>
        </div>
      )
      )}
    </div>
  )
}

export default page

"use client";
import React, { useEffect } from 'react'
import { logoutUser } from '../../../../api/logoutUser';

export default function CustomizePage() {
  useEffect(()=>{
    logoutUser();
  })
  return (
    <div>CustomizePage</div>
  )
}

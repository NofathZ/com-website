import { useState, useEffect } from 'react'
import './OpenRecruitment.scss'
import Header from '../components/Oprek/Header'
import Navbar from '../components/Navbar'
import Role from '../components/Oprek/Role'
import FormApply from '../components/Oprek/FormApply'
import Footer from '../components/Footer'
import backoffice from '../api/backoffice'

function OpenRecruitment() {
  const [RoleCompany, setRoleCompany] = useState([])
  const [RoleCommunity, setRoleCommunity] = useState([])

  useEffect(async () => {
    window.scrollTo(0, 0);
    await backoffice.get('/api/v1/user/departments').then(resp => {
      setRoleCompany(resp.data.data.Company)
      setRoleCommunity(resp.data.data.Community)
    })
  }, [])
  
  return(
    <>
      <Navbar />
      <Header />
      <Role RoleCompany={RoleCompany} RoleCommunity={RoleCommunity} />
      <FormApply RoleCompany={RoleCompany} RoleCommunity={RoleCommunity} />
      <Footer />
    </>
  )
}

export default OpenRecruitment
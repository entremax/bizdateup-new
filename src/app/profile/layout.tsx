import React from 'react'
type Props = {
  children: React.ReactNode
  user: React.ReactNode
}
const ProfileLayout = ({ children ,user}: Props) => (
  <main className={' pt-20 md:px-16 xl:px-3'}>
  
  {children}
  {user}
  </main>
)

export default ProfileLayout

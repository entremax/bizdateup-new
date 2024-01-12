import React from 'react'
type Props = {
  children: React.ReactNode
}
const ProfileLayout = ({ children }: Props) => (
  <main className={' pt-20 md:px-16 xl:px-3'}>
    {children}
  </main>
)

export default ProfileLayout

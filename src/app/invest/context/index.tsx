import { createContext, useContext, useState } from 'react'

const CaptionAiContext = createContext({})

const CaptionContextProvider = ({ children }) => {
  const [selected, setSelected] = useState({
    tone: '👔 Formal',
    network: 'Instagram',
    accuracy: 'low',
  })
  const [checked, setChecked] = useState({
    hashtags: true,
    emojis: true,
  })
  const [result, setResult] = useState(null)
  const [language, setLanguage] = useState('English')
  const [creditUsage, setCreditUsage] = useState({
    total_credit: 0,
    total_token: 0,
  })

  return (
    <CaptionAiContext.Provider value={}>{children}</CaptionAiContext.Provider>
  )
}

export default CaptionContextProvider

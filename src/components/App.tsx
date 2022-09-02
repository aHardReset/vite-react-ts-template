import React, { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'

function App(): React.ReactElement {
  const [count, setCount] = useState(0)
  const [t, i18n] = useTranslation('App')

  return (
    <div className='App'>
      <div>
        <h1>{'Header'}</h1>
        <h3>{t('header.title')}</h3>
        <h3>{t('header.subtitle')}</h3>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'>
        <button onClick={async () => await i18n.changeLanguage('en')}>
          {'English'}
        </button>
        <button onClick={async () => await i18n.changeLanguage('es')}>
          {'Español'}
        </button>
      </div>
      <div className='card'>
        <h4>{t('footer.title')}</h4>
        <h4>{t('footer.subtitle')}</h4>
      </div>
    </div>
  )
}

export default App

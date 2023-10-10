import { useEffect, useState } from 'react'
import { getRandomFac } from './services/facts'

const URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState('');
  const [urlImage, setUrlImage] = useState('');
  //para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFac().then((fact => setFact(fact)))
  }, []);
  const handelClick = async () => {
    const data = await getRandomFac()
    setFact(data)
  }
  //para recuperar el imagen cada vez que cambie la cita
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data;
        setUrlImage(url);
      })
  }, [fact])
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handelClick}>Obtener nuevo imagen</button>
      {fact && <p>{fact}</p>}
      <div className='image'>
        {urlImage && <img src={`${URL}${urlImage}`} alt={'Imagen sacado de una web anonima'} />}
      </div>
    </main>
  )
}

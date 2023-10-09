import { useEffect, useState } from 'react'
export const App = () => {


  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handelMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    }
    if (enabled) {
      window.addEventListener('pointermove', handelMove) //nos subcribimos
    }
    return () => {
      window.removeEventListener('pointermove', handelMove) //nos dessubcribimos
    }
  }, [enabled])
  return (
    <main>
      <div style={{
        position: 'absolute',
        top: -20,
        left: -20,
        width: 40,
        height: 40,
        backgroundColor: '#09f',
        opacity: 0.8,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <button onClick={() => setEnabled(!enabled)} >
        {
          enabled ? 'Desactivar ' : 'Activar '
        }
        seguir puntero
      </button>
    </main>
  )
}

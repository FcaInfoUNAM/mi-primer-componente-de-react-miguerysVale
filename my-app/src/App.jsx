
import './App.css'
import './grid.css'
import { Navigation } from './Navigation'
import { Grid } from './Grid'
import logo from './assets/react.svg'
//App.jsx agregamos como parámetro items el arreglo
<Navigation srcImg={logo} alt="Logo" items={navigationItems}/>

/*App.jsx*/
function App() {

  return (
    <>
      <Navigation srcImg={logo} alt="Logo" items={navigationItems}/>
      <Grid items={navigationItems}/>
    </>
  )
}
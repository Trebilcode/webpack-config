import { render } from 'react-dom'
import './styles/index.scss'

render(<h1>Ohhh</h1>, document.getElementById('root'))

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,    
}
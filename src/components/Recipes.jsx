import { useState } from 'react'

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,    
}

import React from 'react'

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
  return (
    <div>
        <h3>Current Recipe</h3>
        <button onClick={() => setRecipe(elvenShieldRecipe)}>elvenShieldRecipe</button>
        <button onClick={() => setRecipe(elvenGauntletsRecipe)}>elvenGauntletsRecipe</button>
        <ul>
            {Object.keys(recipe).map(material => (
                <li key={material}>
                    {material}: {recipe[material]}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Recipes
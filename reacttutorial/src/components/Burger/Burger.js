import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
import classes from './Burger.module.css'

const Burger = (props) => {
    let ingredientsArray = []
    for (const ing in props.ingredients){
        if (props.ingredients[ing] !== 0){
            for (let i = 0; i < props.ingredients[ing]; i++){
                ingredientsArray.push(ing)
            }
        }
    }
    
    let burgerIngredients = ingredientsArray.map((ing, i) => {
        return <BurgerIngredient key={ing + i} type={ing}/>
    })

    if (burgerIngredients.length === 0){
        burgerIngredients = <p>Please add in ingredients!</p>
    }
    
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top" />   
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
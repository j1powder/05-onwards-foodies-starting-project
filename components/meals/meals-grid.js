
import React, { Fragment } from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meal-item'

const MealsGrid = ({meals}) => {
    
  return (
    <Fragment>
        <ul className={classes.meals}>
            {meals && meals.map((meal)=>{
                return <li key={meal.id}>
                    
                    <MealItem {...meal} /> 
                </li>
            })}
        </ul>
    </Fragment>
  )
}

export default MealsGrid
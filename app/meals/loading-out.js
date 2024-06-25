import React,{ Fragment } from 'react'
import classes from './loading.module.css'

const MealLoadingPage = () => {
  return (
    <Fragment>
        <h4 className={classes.loading}>....Fetching Meals</h4>
    </Fragment>
  ) 
}

export default MealLoadingPage
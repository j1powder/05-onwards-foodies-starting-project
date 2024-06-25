import React, { Fragment, Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'


const Meals =  async () => {
  const meals = await getMeals()
return <MealsGrid meals={meals}/>
}

const MealsPage = async () => {
  
  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
          </h1>
          <p>Choose your favorite recipe and cook it yourself. it is easy and fun!</p>
          <p className={classes.cta}>
            <Link href='/meals/share'>Share your favorite recipe</Link>
          </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<h4 style={{color:"white"}} className={classes.loading}>....Fetching Meals</h4>}>
            <Meals/>
        </Suspense>
         
      </main>
    </Fragment>
  )
}

export default MealsPage
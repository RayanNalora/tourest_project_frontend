import React from 'react'
import Hero from '../component/2.Hero/Hero'
import TripsContainer from '../component/7.TripsContainer/TripsContainer'
import PrimaryTitle from '../component/3.PrimaryTitle/PrimaryTitle'
import { trips } from '../data/dataTripsContainer'

const ServicePage = () => {
  return (
    <div>
        <Hero
          bgImage="/im7.jpg"
          title="Service"
          classname='about'
       />
        <PrimaryTitle
          title="Recent Trips"
          subtilte="You can discover unique destination using Google Maps."
          />
          <TripsContainer
          data={trips}
          />
    </div>
  )
}

export default ServicePage
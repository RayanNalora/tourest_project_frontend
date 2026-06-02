import React from 'react'
import Hero from '../component/2.Hero/Hero'
import PrimaryTitle from '../component/3.PrimaryTitle/PrimaryTitle'
import Container from '../component/5.Container/Container'
import Section from '../component/6.Section/Section'
import TripsContainer from '../component/7.TripsContainer/TripsContainer'

import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
        axios.get("http://localhost:5000/destinations")
          .then(res =>{
            setData(res.data)
          })
          .catch(err => console.log(err));
      }, []);

      //trip
      const [dataTrips, setDataTrips] = useState([]);

      useEffect(() => {
        axios.get("http://localhost:5000/trips")
          .then(res =>{
            console.log("trip",res.data)
            setDataTrips(res.data)
          } 
      )
          .catch(err => console.log(err));
      }, []);
      
  return (
    <>
        <Hero
        bgImage="/bghero.jpg"
        title="Your Journey Your Story"
        description="Choose Your Favourite Destination."
        btn="Travel Now"
        classname="home"
        />
        <Section>
          <PrimaryTitle
          title="Popular Destinations"
          subtilte="Tours dive you the opportunity to see a lot, within a time frame."
          />
          {data.map((item) => {
            return(
              <Container
              key={item.id}
              title={item.title}
              text={item.text}
              images={item.images}
              reverse={item.reverse}
              classname="homepagecontainer"
              />
            )
          })}
          <PrimaryTitle
          title="Recent Trips"
          subtilte="You can discover unique destination using Google Maps."
          />
          <TripsContainer
          data={dataTrips}
          />
        </Section>
    </>
  )
}

export default HomePage
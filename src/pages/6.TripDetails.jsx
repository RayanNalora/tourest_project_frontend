import { useParams } from "react-router-dom"
import DetialsHeroSection from "../component/10.DetialsHeroSection/DetialsHeroSection";
import { useEffect, useState } from "react";
import Section from "../component/6.Section/Section";
import ImageSection from "../component/11.ImageSection/ImageSection";
import Comment from "../component/12.Comment/Comment";
import Hero from "../component/2.Hero/Hero";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/trips/${id}`)
      .then(res => {
        // console.log(res)
        return res.json()
     })
      .then(data => {
        // console.log("DATA:", data); // 🔥 للتأكد
        setTrip(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!trip) return <h2>Loading...</h2>;
  // {console.log(trip.foods)}
  console.log(trip.images?.[0])

  return (
    <>
     <Hero bgImage={trip.images?.[0]}
     classname="about"/>
      <DetialsHeroSection
          id={trip.id}
          // image={trip.images?.[0]}
          title={trip.title}
          country={trip.country}
          text={trip.text}
          rating={trip.rating}
          price={trip.price}
          duration={trip.duration}
        />
        <Section>

           <ImageSection
            title="Photo About Place"
            images={trip.foods}
          />
          <ImageSection
            title="Photo About Place"
            images={trip.images}
          />
          <Comment />
         
        </Section>

    </>
  )
}

export default TripDetails
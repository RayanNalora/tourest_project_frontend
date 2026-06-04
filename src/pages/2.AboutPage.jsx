import React, { useEffect, useState } from 'react'
import Hero from '../component/2.Hero/Hero'
import Container from '../component/5.Container/Container'
import ServiceCard from '../component/13.ServiceCard/ServiceCard'
import axios from "axios";
import Section from '../component/6.Section/Section'
import Section_top_bottom from '../component/15.Section_top_bottom/Section_top_bottom'
import AboutIntro from '../component/14.AboutIntro/AboutIntro'
import TeamCard from '../component/16.TeamCard/TeamCard';
import PrimaryTitle from '../component/3.PrimaryTitle/PrimaryTitle';

const AboutPage = () => {
  const [services, setServices] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => setServices(res.data.services))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/team")
      .then((res) => setTeamMembers(res.data))
      .catch((err) => console.log(err));
  }, []);


console.log(services)
  return (
    <div>
      <Hero
          bgImage="/im6.jpg"
          title="Discover the World with Trippy"
          description="A modern travel platform built to help explorers find unforgettable destinations and experiences around the globe."
          classname='about'
       />

          <Section_top_bottom>
            <AboutIntro
              subtitle="Who We Are"
              title="Discover the World With Trippy"
              text="Trippy was created to inspire travelers and help them discover amazing destinations around the world. Our mission is to make travel planning simple, enjoyable, and unforgettable."
              image="/download.jpg"
            />
          </Section_top_bottom>

          <Section_top_bottom>
            <Hero
                title="Everything You Need For Your Next Adventure"
                classname='about-section'
              />
            </Section_top_bottom>
           <Section_top_bottom>
              <div className="services-container">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      {...service}
                    />
                  ))}
                </div>
            </Section_top_bottom>
            <Section_top_bottom>
              <AboutIntro
              subtitle="MEET OUR TEAM"
              title="The People behind Trippy"
              classname="center"
              />
              <div className="team-container">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  {...member}
                />
              ))}
            </div>
            </Section_top_bottom>
    </div>
  )
}

export default AboutPage
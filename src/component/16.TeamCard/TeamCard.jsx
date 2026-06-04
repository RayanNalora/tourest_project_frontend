import Section_top_bottom from '../15.Section_top_bottom/Section_top_bottom';
import './TeamCard.css'

const TeamCard = ({ image, name, role }) => {
    return (
         <div className="team-card">
        <img src={image} alt={name} />
        <div className="info">
            <h3>{name}</h3>
    
             <p>{role}</p>
        </div>
      </div>
    );
  };
  
  export default TeamCard;
  
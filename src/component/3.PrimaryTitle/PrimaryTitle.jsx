import './PrimaryTitle.css'

const PrimaryTitle = ({title , subtilte}) => {
  return (
    <div className='section-title'>
        <h2>{title}</h2>
        <p>{subtilte}</p>
    </div>
  )
}

export default PrimaryTitle
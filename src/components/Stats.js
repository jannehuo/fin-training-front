const Stats = (props) => {
  return (
    <div className='stats-container'>
      <span className='amount-row-header'>Viewed</span>
      <span key={props.amount} className='amount animate'>
        {props.amount}
      </span>
    </div>
  )
}

export default Stats

import './index.css'

const HistoryItem = props => {
  const {userDetails, fillFunction} = props
  const {id, logoUrl, title, timeAccessed, domainUrl} = userDetails
  const onFillFunction = () => {
    fillFunction(id)
  }
  return (
    <li className="list">
      <div className="date-logo-text-con">
        <p className="time">{timeAccessed}</p>
        <div className="icon-con">
          <img className="logo-img" src={logoUrl} alt="domain logo" />
          <div className="text-box">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onFillFunction}
        className="button"
        type="button"
        data-testid="delete"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem

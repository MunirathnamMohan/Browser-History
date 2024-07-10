import './index.css'

const HistoryItems = props => {
  const {item, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="items-con">
      <div className="top">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" key="logoUrl" />
        <p className="text">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div className="below">
        <button onClick={onDelete} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems

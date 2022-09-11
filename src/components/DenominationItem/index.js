// Write your code here

import './index.css'

const DenominationItem = props => {
  const {rupees, withDrawMoney} = props

  const withDraw = () => {
    withDrawMoney(rupees)
  }

  return (
    <li className="listItem">
      <button
        type="button"
        value={rupees}
        className="rupees-item"
        onClick={withDraw}
      >
        {rupees}
      </button>
    </li>
  )
}

export default DenominationItem

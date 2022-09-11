// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

const rupeesList = [
  {
    id: 1,
    rupees: 50,
  },
  {
    id: 2,
    rupees: 100,
  },
  {
    id: 3,
    rupees: 200,
  },
  {
    id: 4,
    rupees: 500,
  },
]

class CashWithdrawal extends Component {
  state = {balance: '2000'}

  withDrawMoney = rupees => {
    const {balance} = this.state
    console.log(rupees)
    if (balance - rupees >= 0) {
      this.setState({balance: parseInt(balance) - rupees})
      console.log('1 ')
    }
  }

  render() {
    const {balance} = this.state
    return (
      <div className="cashWithdrawal-bg-container">
        <div className="cashWithdrawal-container">
          <div className="name-container">
            <div className="name-container-logo">S</div>
            <h1 className="name-container-name">Sarah Williams</h1>
          </div>
          <div className="your-balance-section">
            <p className="your-balance-heading">Your Balance</p>
            <p className="your-balance">{balance}</p>
          </div>
          <div className="inRupees-section">
            <p className="in-rupees-name">In Rupees</p>
          </div>
          <div className="withdraw-section">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-sum-name">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div>
            <ul className="rupees-container">
              {rupeesList.map(eachItem => (
                <DenominationItem
                  rupees={eachItem.rupees}
                  key={eachItem.id}
                  withDrawMoney={this.withDrawMoney}
                />
              ))}
              {/* <li>
                
              </li>
              <li>
                <DenominationItem
                  key={2}
                  rupees={100}
                  withDrawMoney={this.withDrawMoney}
                />
              </li>
            </ul>
            <ul className="rupees-container">
              <li>
                <DenominationItem
                  key={3}
                  rupees={200}
                  withDrawMoney={this.withDrawMoney}
                />
              </li>
              <li>
                <DenominationItem
                  key={4}
                  rupees={500}
                  withDrawMoney={this.withDrawMoney}
                />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

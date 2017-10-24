import React from 'react';

class LoanAmountDetails extends React.Component {

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
          <tr>
            <td className='column-heading' >House Cost</td>
            <td className='column-data' >$<input id='houseCost' className='moneyInput' value={Number(this.props.loanDetails.houseCost).toFixed(2)} type='number' min='0' step='1000' onChange={(event) => this.props.updateHouseCost(event.target.value)} /></td>
          </tr>
          <tr>
            <td className='column-heading' >Down Payment Amount</td>
            <td className='column-data' >
                $<input id='downAmount' className='moneyInput' value={Number(this.props.loanDetails.downAmount).toFixed(2)} type='number' min='0' step='1000' onChange={(event) => this.props.updateDownAmount(event.target.value)} />
            </td>
            <td className='column-data' >
                %<input id='downPercent' className='percentageInput' value={Number(this.props.loanDetails.downPercent).toFixed(1)} type='number' min='0' step='1' onChange={(event) => this.props.updateDownPercent(event.target.value)} />
            </td>
          </tr>
          <tr>
            <td className='column-heading' >Loan Amount</td>
            <td className='column-data' >$<input id='loanAmount' className='moneyInput' value={Number(this.props.loanDetails.loanAmount).toFixed(2)} type='number' min='0' step='1000' onChange={(event) => this.props.updateLoanAmount(event.target.value)} /></td>
          </tr>

          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanAmountDetails;

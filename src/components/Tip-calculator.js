import React from "react";

class Tip_calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TotalBill: "",
            Tip: "",
            Calculate: ""
        }
        this.handleTip = this.handleTip.bind(this)
        this.handleTotalBill = this.handleTotalBill.bind(this)
        this.handleCalculate = this.handleCalculate.bind(this)
    }
    
    handleTotalBill(event) {
        event.preventDefault();
        this.setState({
            TotalBill: Number(event.target.value),
        })
    }

    handleTip(event) {
        event.preventDefault();
        this.setState({
            Tip: Number(event.target.value),
           
        })
    }

    handleCalculate(event) {
        event.preventDefault();
        this.setState({
            Calculate: this.state.TotalBill+((this.state.Tip * this.state.TotalBill)/100),
        })
    }


    render () {
    return(
        <div className="container">
            <div className="wrapper">
                <div className="upper">
                    <form>
                        <label>Total bill</label><br></br>
                        <input type="number" placeholder="0.00" value={this.state.TotalBill} onChange={this.handleTotalBill}/>
                    </form>
                    <br></br>
                </div>
                <div className="middle">
                        <label>Tip</label><br></br>
                        <input type="number" placeholder="0" value={this.state.Tip} onChange={this.handleTip}/>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <button onClick={this.handleCalculate}>calculate</button><br></br>
                        <span>{this.state.Calculate}</span>
                    </div>

                </div>
            </div>
        </div>

    )
    }
}

export default Tip_calculator;
import React from "react";

function Tip_calculator() {
    
    return(
        <div className="container">
            <div className="wrapper">
                <div className="upper">
                    <form>
                        <label>bill</label>
                        <input type="number" placeholder="0.00"/>
                    </form>
                </div>
                <div className="middle">
                        <label>Tip</label>
                        <input type="number" placeholder="0" />
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                    <p>People</p>
                        <button>increase</button>
                        <span>1</span>
                        <button>decrease</button>
                    </div>

                    <div className="bottom-right">
                        <p>Total per Person</p>
                        <span>0.00</span>
                    </div>

                </div>
            </div>
        </div>

        // <h1>hello class</h1>
    )

}

export default Tip_calculator;
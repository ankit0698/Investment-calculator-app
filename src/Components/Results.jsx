
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {

    const resultData = calculateInvestmentResults(input)
    const InitialInvestment =
        resultData[0].valueEndOfYear
        - resultData[0].interest
        - resultData[0].annualInvestment

    const [showingResult, setShowingResult] = useState(false)

    function clickHandler(input) {
        setShowingResult(true)
    }

    function backClickHandler(input) {
        setShowingResult(false)
    }


    return (
        <>
            {!showingResult && (
                <div className="input-group">
                    <button className="button" onClick={() => clickHandler()}>Click Here</button>
                </div>
            )}
            {showingResult &&
                (   <>
                <div className="input-group-back">
            <button className="button-btn" onClick={()=>backClickHandler()}>Go Back</button>
            </div>
                    <table id="result">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Investment value</th>
                                <th> Interest(Year)</th>
                                <th>Total Intereest</th>
                                <th>Invested Capital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultData.map(prevYear => {
                                const totalInterest = (prevYear.valueEndOfYear
                                    - prevYear.annualInvestment * prevYear.year
                                    - InitialInvestment)

                                const investedCapital = (InitialInvestment + prevYear.annualInvestment * prevYear.year)
                                return (
                                    <tr key={prevYear.year}>
                                        <td>{prevYear.year}</td>
                                        <td>{formatter.format(prevYear.valueEndOfYear)}</td>
                                        <td>{formatter.format(prevYear.interest)}</td>
                                        <td>{formatter.format(totalInterest)}</td>
                                        <td>{formatter.format(investedCapital)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    

                </>)}
        </>
    )

}


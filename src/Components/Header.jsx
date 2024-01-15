import logo from '../assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <header id="header">
    <img src={logo} alt="investmment"/>
    <h3>Investment Calculator</h3>
  </header>
    )
}
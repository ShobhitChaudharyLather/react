import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useExchangeRate from './hooks/useExchangeRate'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const rate = useExchangeRate(from, to)
  const options = ["USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY"]

  const swap = () => {
    // Swap using temp
    const temp = from
    setFrom(to)
    setTo(temp)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2))
    } else {
      alert("Conversion rate not available")
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">

          {/* 🔥 Currency Converter Heading */}
          <div className="bg-black/40 px-4 py-3 rounded-md text-center mb-6">
            <h1 className="text-3xl font-extrabold text-white flex items-center justify-center gap-2">
              <span role="img" aria-label="globe">🌍</span>
              Currency Converter
            </h1>
          </div>

          {/* 💱 Form Starts */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5 my-3">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 text-sm"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white px-4 py-3 rounded-lg font-semibold"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

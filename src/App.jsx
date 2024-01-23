import React from 'react'
import Fedex from './components/fedexTracking'
import ProductRecommendations from './components/productRecommendations/productRecommendations'

const App = () => {
  return (
    <div>
        <Fedex />
        <ProductRecommendations />
    </div>
  )
}

export default App
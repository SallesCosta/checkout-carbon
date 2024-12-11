const CreditPriceURL = 'https://6751f822d1983b9597b4fa68.mockapi.io/api'

export const getCredPrice = async (id: number) => {
  try {
    const idString = id.toString()
    const response = await fetch(`${CreditPriceURL}/credit-price/${idString}`)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const postCredPrice = async (data: object) => {
  try {
    const response = await fetch(`${CreditPriceURL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to post data')
    }

    const responseData = await response.json()
    return responseData
  } catch (error) {
    return error
  }
}

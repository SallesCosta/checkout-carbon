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

export type PostData = {
  co2: string | null
  cred: string | null
  card_number: string
  expiration_month: string
  expiration_year: string
  security_code: string
  cardholder: {
    name: string
    identification: {
      type: string
      number: string
    }
  }
}

export const postCredPrice = async (data: PostData) => {
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

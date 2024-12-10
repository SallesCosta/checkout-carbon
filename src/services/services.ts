export const getCredPrice = async (id: number) => {
  try {
    const idString = id.toString()
    const response = await fetch(
      `https://6751f822d1983b9597b4fa68.mockapi.io/api/credit-price/${idString}`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const getAllCredPrice = async (id: string) => {
  try {
    const params = new URLSearchParams({ id }).toString()
    const response = await fetch(
      `https://6751f822d1983b9597b4fa68.mockapi.io/api/credit-price//?${params}`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

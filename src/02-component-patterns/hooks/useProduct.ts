import { useState } from "react"
import { onChangeArg, Product } from "../interfaces/interfaces"


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArg) => void
}


export const useProduct = ({onChange, product}:useProductArgs) => {
  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    const newValue =  Math.max(counter + value, 0)

    setCounter(newValue)

    onChange && onChange({count: newValue, product});
  }

  return {
    //* Propieades
    counter,

    //* Métodos
    increaseBy
  }
}

import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArg, Product } from "../interfaces/interfaces"


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues
}


export const useProduct = ({onChange, product, value = 0, initialValues}:useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false)
  

  const increaseBy = (value: number) => {
    let newValue =  Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue =  Math.min(newValue, initialValues?.maxCount)     
    }
    
    setCounter(newValue)
    onChange && onChange({count: newValue, product});
  }

  useEffect(() => {
    // solo cuando el elemento esta montado ejecuta el setcouter
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [value])

  useEffect(() => {
    isMounted.current = true;
  }, [])

  return {
    //* Propieades
    counter,

    //* Métodos
    increaseBy,
    maxCount: initialValues?.maxCount
  }
}

import type { QuantitySelectorProps } from '../types'
import { Button } from './Button'

const QuantitySelector = ({quantity, onIncrease, onDecrease}:QuantitySelectorProps) => {
  return (
    <div className="flex items-center justify-between border p-2 h-[35px] rounded-full w-[100px] md:w-[120px]">
                  <Button onClick={onDecrease} title='-' className='w-[30px] rounded-[10px] bg-black text-white text-center'/>
                  <h1>{quantity}</h1>
                  <Button onClick={onIncrease} title='+' className='w-[30px] rounded-[10px] bg-black text-white border-[#eeeeee]  '/>
    </div>
  )
}

export default QuantitySelector
import type { ButtonProps } from '../types'

export const Button = ({title, onClick, className}:ButtonProps) => {
  return (
    <button onClick={onClick} className={` flex justify-center items-center ${className ? className : 'rounded-full bg-black text-[14px] font-[500] text-white h-[35px] w-[120px] border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition'}`  }>
        {title}
    </button>
  )
}

"use client"

import { ModalProps } from '@/types'
import { useEffect, useState } from 'react'

const Modal = ({ id, color, title, value, tax, closeText }: ModalProps) => {

  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const val = value + tax
    setTotalValue(val)
  }, [color, title, value, tax])

  return (
    <dialog id={id.toString()} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center border-b-2">車体名：{title}</h3>

        <div className="flex justify-around w-40 mx-auto">
          <p className="pt-4">色</p>
          <p className="pt-4 text-right">{color}</p>
        </div>
        <div className="flex justify-around w-40 mx-auto">
          <p className="pt-4">本体価格</p>
          <p className="pt-4 text-right">{value}</p>
        </div>
        <div className="flex justify-around w-40 mx-auto">
          <p className="pt-4">消費税</p>
          <p className="pt-4 text-right">{tax}</p>
        </div>

        <h3 className="mt-4 py-1 font-bold text-lg text-center bg-gray-200 rounded-md">参考乗り出し価格：{totalValue}</h3>
      </div >
      <form method="dialog" className="modal-backdrop">
        <button>{closeText}</button>
      </form>
    </dialog >
  )
}

export default Modal

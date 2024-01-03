"use client"

import Image from "next/image"
import Modal from "./Modal"
import { bikeData, manufacturers } from "@/constants"
import { useEffect, useState } from "react"


const BikeCard = () => {
  const [maker, setMaker] = useState("all")

  useEffect(() => {
    console.log(maker)

    filterElementsByBadge(maker)
  }, [maker])


  const openModal = (id: number) => {
    const modal = document.getElementById(`${id}`)
    if (modal) {
      (modal as HTMLDialogElement).showModal()
    }
  }
  const filterElementsByBadge = (badgeText: string | null) => {
    const elements = document.querySelectorAll('.badge')
    elements.forEach((element) => {
      const parentElement = element.closest('.card')
      if (badgeText !== "all") {
        const selectElement = document.querySelector('.select') as HTMLSelectElement
        if (selectElement) {
          const selectedOption = selectElement.value
          if (badgeText && badgeText !== selectedOption) {
            setMaker(badgeText)
          }
        }
        if (element.textContent !== badgeText) {
          if (parentElement) {
            (parentElement as HTMLElement).style.display = 'none'
          }
        } else {
          (parentElement as HTMLElement).style.display = 'block'
        }
      } else {
        (parentElement as HTMLElement).style.display = 'block'
      }
    })


  }

  return (
    <>
      <label className="form-control w-full max-w-xs pt-2">
        <div className="label">
          <span className="label-text">メーカー</span>
        </div>
        <select className="select select-bordered" value={maker} onChange={(e) => setMaker(e.target.value)}>
          <option disabled selected>選択してください</option>
          <option value={"all"}>全て</option>
          {manufacturers.map((manufacturer) => (
            <option key={manufacturer.id} value={manufacturer.maker}>{manufacturer.maker}</option>
          ))}
        </select>
      </label>

      <div id="card-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-3">
        {bikeData.map((data, index) => (
          <div className="card w-100vw bg-base-100 shadow-xl mt-10" key={data.id}>
            <Image src={data.src} alt="bike" width={500} height={500} className="object-contain aspect-video" />
            <div className="card-body">
              <h2 className="card-title">
                {data.title}
              </h2>
              <p>{data.disp}</p>
              <button className="badge badge-outline" onClick={() => filterElementsByBadge(data.tag)}>{data.tag}</button>
              <div className="card-actions flex justify-between items-end">
                <p className="text-xl">参考乗り出し価格：¥{data.value}</p>
                <button className="btn btn-primary" onClick={() => openModal(index + 1)}>詳細</button>
                <Modal
                  id={index + 1}
                  color={data.color}
                  title={data.title}
                  value={parseInt(data.modalValue)}
                  tax={parseInt(data.modalTax)}
                  closeText={data.closeText}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default BikeCard

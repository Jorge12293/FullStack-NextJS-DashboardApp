"use client"

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5"

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counterReducer.count)  
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            label="Counter" 
            title={`${count}`} 
            subTitle="Products Add"
            icon={<IoCartOutline size={50}  className="text-blue-500" /> } 
            href="/dashboard/counter"
        />
    </div>
  )
}

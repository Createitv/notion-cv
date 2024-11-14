'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 47,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBox = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-800 px-3 py-1 rounded-md min-w-[40px] text-center"
      >
        <span className="text-white font-mono font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs text-gray-400 mt-1">{label}</span>
    </div>
  )

  return (
    <div className="flex items-center gap-2">
      <TimeBox value={timeLeft.hours} label="时" />
      <span className="text-white font-bold mt-[-20px]">:</span>
      <TimeBox value={timeLeft.minutes} label="分" />
      <span className="text-white font-bold mt-[-20px]">:</span>
      <TimeBox value={timeLeft.seconds} label="秒" />
    </div>
  )
} 
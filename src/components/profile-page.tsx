'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hand, MessageSquare, Download } from 'lucide-react'
import { BsWechat } from "react-icons/bs";
import SocialMediaBar from './social-media-bar'
export default function ProfilePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [stats, setStats] = useState({
    customers: 0,
    experience: 0,
    projects: 0,
    honors: 3
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        setStats(prevStats => ({
          ...prevStats,
          customers: Math.floor(progress * (1500 - start) + start),
          experience: Math.floor(progress * (4 - start) + start),
          projects: Math.floor(progress * (40 - start) + start),
          honors: Math.floor(progress * (2 - start) + start)
        }))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }

    animateValue(0, 1500, 2000)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header className="p-4 flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm text-zinc-300">欢迎Notion爱好者</span>
        </div>
        <div className="text-zinc-300 font-mono" suppressHydrationWarning>{formatTime(currentTime)}</div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar */}
          <Card className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-lg overflow-hidden flex-shrink-0">
            <img
              src="/lxy.jpeg"
              alt="Profile Avatar"
              className="w-full h-full object-cover"
              width={192}
              height={192}
            />
          </Card>

          {/* Profile Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Hand className="w-6 h-6 text-yellow-500" />
              <span className="text-2xl font-bold">Hello I Am</span>
            </div>
            <h1 className="text-4xl font-bold">林逍遥</h1>
            <p className="text-zinc-400 max-w-2xl">
              The Notion Creator, 帮助您提高生产力、释放您的全部潜力。创建专属的 Notion 模板以满足自己的个性化需要，爱上Notion。降低Notion的学习曲线，以下有我个人偶遇Notion到至今的介绍。
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <Button className="bg-green-600 hover:bg-green-700">
                <BsWechat className="w-4 h-4 mr-2" />
                联系我
              </Button>
              <Button variant="secondary" className="border-zinc-700">
                <Download className="w-4 h-4 mr-2" />
                获取模版
              </Button>
            </div>
          </div>
        </div>

        {/* 轮毂 */}
        <div className="w-full bg-black p-4 overflow-hidden">
          <SocialMediaBar />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{stats.customers}+</div>
            <div className="text-sm text-zinc-400">服务客户</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{stats.experience}+</div>
            <div className="text-sm text-zinc-400">使用经验年限</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{stats.projects}+</div>
            <div className="text-sm text-zinc-400">完成项目</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{stats.honors}+</div>
            <div className="text-sm text-zinc-400">荣誉</div>
          </div>
        </div>
      </main>
    </div>
  )
}
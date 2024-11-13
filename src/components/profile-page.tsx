'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hand, MessageSquare, Download, BookOpen, Brain, Code2, Coffee, LineChart, Users, ShieldCheck } from 'lucide-react'
import { BsWechat } from "react-icons/bs";
import SocialMediaBar from './social-media-bar'
import { motion } from 'framer-motion'
export default function ProfilePage() {


  const skills = [
    { name: "效率提升", icon: LineChart },
    { name: "流程优化", icon: Code2 },
    { name: "团队协作", icon: Users },
    { name: "数据分析", icon: Brain },
    { name: "项目管理", icon: Coffee },
    { name: "知识管理", icon: BookOpen },
  ]

  const certifications = [
    "Notion Advanced Certified",
    "PMP项目管理认证",
    "数据分析师认证",
    "敏捷教练认证"
  ]

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
          <Card className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-lg overflow-hidden flex-shrink-0">
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
            <div>
              <h1 className="text-2xl font-bold text-white">林逍遥</h1>
              <p className="text-gray-400">Notion 效能提升专家 / 模版定制 </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">{cert}</span>
                </div>
              ))}
            </div>

            <p className="text-zinc-400 max-w-2xl">
              The Notion Creator, 帮助您提高生产力、释放您的全部潜力。创建专属的 Notion 模板以满足自己的个性化需要，爱上Notion。降低Notion的学习曲线，以下有我个人偶遇Notion到至今的介绍。
            </p>

            <p className="text-gray-300 leading-relaxed">
              拥有8年+效能提升和数字化转型咨询经验，专注于帮助个人和企业提升工作效率、优化流程、建立可持续的知识管理体系。曾服务过50+企业客户，包括科技、教育、咨询等多个领域。
            </p>


          </div>
        </div>

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

        {/* 技能展示 */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center"
              whileHover={{ y: -5 }}
            >
              <skill.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-sm text-gray-300">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
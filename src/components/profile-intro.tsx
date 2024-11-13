'use client'
import { motion } from "framer-motion"
import {
  Award,
  BookOpen,
  Brain,
  ShieldCheck,
  Clock,
  Code2,
  Coffee,
  GraduationCap,
  Laptop,
  LineChart,
  MessageSquare,
  Users
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  { number: "500+", label: "服务客户" },
  { number: "50+", label: "企业项目" },
  { number: "1000+", label: "咨询小时" },
  { number: "98%", label: "客户好评" },
]

const skills = [
  { name: "效率提升", icon: LineChart },
  { name: "流程优化", icon: Code2 },
  { name: "团队协作", icon: Users },
  { name: "数据分析", icon: Brain },
  { name: "项目管理", icon: Coffee },
  { name: "知识管理", icon: BookOpen },
]

const certifications = [
  "Notion Certified Consultant",
  "PMP项目管理认证",
  "数据分析师认证",
  "敏捷教练认证"
]

export default function ProfileIntro() {
  return (
    <div className="w-full bg-black p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* 个人介绍卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左侧：个人信息 */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Sarah Chen</h1>
                  <p className="text-gray-400">效能提升专家 / 数字化顾问</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                拥有8年+效能提升和数字化转型咨询经验，专注于帮助个人和企业提升工作效率、优化流程、建立可持续的知识管理体系。曾服务过50+企业客户，包括科技、教育、咨询等多个领域。
              </p>

              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  预约咨询
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  查看作品集
                </Button>
              </div>
            </div>
          </div>

          {/* 右侧：成就数据 */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.label}
                    className="text-center p-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-blue-400">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
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

        {/* 时间轴：工作经历 */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5" />
            工作经历
          </h3>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="relative pl-6 pb-6 border-l border-zinc-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                      2020 - 现在
                    </Badge>
                    <h4 className="text-white font-medium">高级效能顾问</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    负责为企业和个人客户提供效能提升解决方案，包括流程优化、
                    团队协作、知识管理等领域的咨询服务。
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
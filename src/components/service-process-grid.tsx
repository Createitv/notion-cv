'use client'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageSquare, CalendarCheck, Pencil, CheckCircle, MousePointerClick, ArrowRight, ArrowDown } from 'lucide-react'
import { motion } from "framer-motion"

const processes = [
  {
    icon: MessageSquare,
    title: "初步沟通",
    description: "了解你的需求和目标，确定服务方向和范围",
    dialogContent: {
      title: "初步沟通详情",
      description: "我们将通过以下方式进行沟通：",
      details: [
        "• 微信语音或视频通话",
        "• 了解您的具体需求和痛点",
        "• 评估项目可行性",
        "• 初步确定服务范围",
        "• 预估时间和成本"
      ],
      contactInfo: "联系方式：WeChat ID: your_wechat_id"
    }
  },
  {
    icon: CalendarCheck,
    title: "预约安排",
    description: "确定具体的咨询时间和方式，制定个性化的服务计划",
    dialogContent: {
      title: "预约安排详情",
      description: "灵活的预约时间段：",
      details: [
        "• 工作日：9:00-18:00",
        "• 周末：10:00-16:00",
        "• 可提前24小时预约",
        "• 支持在线日程安排",
        "• 自动日历提醒"
      ],
      contactInfo: "预约系统：calendar.com/your_calendar"
    }
  },
  {
    icon: Pencil,
    title: "方案制定",
    description: "根据沟通结果，设计专属的解决方案和实施步骤",
    dialogContent: {
      title: "预约安排详情",
      description: "灵活的预约时间段：",
      details: [
        "• 工作日：9:00-18:00",
        "• 周末：10:00-16:00",
        "• 可提前24小时预约",
        "• 支持在线日程安排",
        "• 自动日历提醒"
      ],
      contactInfo: "预约系统：calendar.com/your_calendar"
    }
  },
  {
    icon: CheckCircle,
    title: "执行落地",
    description: "通过在线指导或文档交付，确保方案顺利实施",
    dialogContent: {
      title: "预约安排详情",
      description: "灵活的预约时间段：",
      details: [
        "• 工作日：9:00-18:00",
        "• 周末：10:00-16:00",
        "• 可提前24小时预约",
        "• 支持在线日程安排",
        "• 自动日历提醒"
      ],
      contactInfo: "预约系统：calendar.com/your_calendar"
    }
  }
]

export default function ServiceProcess() {
  return (
    <div className="w-full bg-black p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">服务流程</h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MousePointerClick className="w-4 h-4 animate-bounce" />
            <p className="text-sm md:text-base">点击每个步骤了解详情</p>
          </div>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines - 桌面端水平，移动端垂直 */}
          <div className="absolute hidden md:block top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500/50 to-purple-500/50"
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          <div className="absolute md:hidden left-1/2 top-0 h-full w-1 bg-zinc-800 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500/50 to-purple-500/50"
              animate={{
                y: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Process Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {processes.map((process, index) => (
              <Dialog key={process.title}>
                <DialogTrigger asChild>
                  <motion.div
                    className="flex flex-col items-center cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Step Number with Pulse Effect */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 transition-colors">
                        <process.icon className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                    </div>

                    {/* Step Content */}
                    <Card className="bg-zinc-900 border-zinc-800 w-full group-hover:border-blue-500/50 transition-colors">
                      <CardHeader className="text-center p-4">
                        <CardTitle className="text-white text-lg flex items-center justify-center gap-2">
                          {process.title}
                          <span className="hidden md:inline">
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                          <span className="md:hidden">
                            <ArrowDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-sm">
                          {process.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    {/* "点击查看" Tooltip */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-blue-400 flex items-center gap-1">
                        <MousePointerClick className="w-3 h-3" />
                        点击查看详情
                      </span>
                    </div>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="bg-zinc-900 border-zinc-800 w-[90vw] md:w-full max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-white">
                      {process.dialogContent.title}
                    </DialogTitle>
                  </DialogHeader>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300">
                      {process.dialogContent.description}
                    </p>
                    <div className="space-y-2">
                      {process.dialogContent.details.map((detail, i) => (
                        <motion.p
                          key={i}
                          className="text-gray-400 text-sm md:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-sm text-gray-400">
                        {process.dialogContent.contactInfo}
                      </p>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
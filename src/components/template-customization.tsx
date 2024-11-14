'use client'
import { motion } from "framer-motion"
import {
  Sparkles,
  Palette,
  Settings,
  Clock,
  Check,
  ArrowRight,
  Shield,
  Rocket,
  RefreshCcw,
  MessageSquare,
  Zap,
  Crown,
  Star,
  Plus,
  Building2,
  Timer
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PriceCard from "./price-card"
import CountdownTimer from './countdown-timer'

const customizationSteps = [
  {
    icon: MessageSquare,
    title: "需求沟通",
    description: "深入了解您的具体需求、使用场景和期望效果",
    details: [
      "一对一视频沟通",
      "需求文档确认",
      "场景分析建议",
      "可行性评估"
    ]
  },
  {
    icon: Palette,
    title: "方案设计",
    description: "基于沟通结果，设计个性化的解决方案",
    details: [
      "功能模块规划",
      "界面布局设计",
      "工作流程优化",
      "数据结构设计"
    ]
  },
  {
    icon: Settings,
    title: "开发实现",
    description: "高质量完成模板开发，确保实用性和美观性",
    details: [
      "模块化开发",
      "自动化配置",
      "数据关联处理",
      "界面美化优化"
    ]
  },
  {
    icon: RefreshCcw,
    title: "测试完善",
    description: "反复测试和优化，确保完美符合需求",
    details: [
      "功能测试",
      "性能优化",
      "用户体验提升",
      "细节打磨"
    ]
  }
]

const pricingPlans = [
  {
    title: "基础版",
    price: "￥198",
    description: "适合个人使用的基础模板定制",
    features: [
      "3个核心功能模块",
      "基础界面定制",
      "7天内完成",
      "10天免费维护",
      "1次修改机会",
      "基础使用指导"
    ],
    icon: Zap,
    popular: false
  },
  {
    title: "专业版",
    price: "￥698",
    description: "适合专业人士的深度定制方案",
    features: [
      "6个功能模块",
      "深度界面定制",
      "优先开发",
      "30天免费维护",
      "3次修改机会",
      "视频培训指导",
      "性能优化",
      "数据分析功能"
    ],
    icon: Crown,
    popular: true
  },
  {
    title: "企业版",
    price: "询价",
    description: "适合企业团队的全方位定制",
    features: [
      "无限功能模块",
      "完全定制化",
      "最高优先级",
      "全年技术支持",
      "无限次修改",
      "现场培训",
      "专属客户经理",
      "团队协作功能",
      "API集成支持"
    ],
    icon: Building2,
    popular: false
  }
]

export default function TemplateCustomization() {
  return (
    <div className="w-full bg-black min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* 头部区域 */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span>专业的模板定制服务</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            打造专属于您的完美模板
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            无论是个人还是企业，我们都能为您提供专业的定制服务，让您的工作流更加高效
          </p>
        </div>

        {/* 定制流程 */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">定制流程</h2>
            <p className="text-gray-400 mt-2">专业规范的服务流程，确保完美交付</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 h-full hover:border-blue-500/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-blue-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 价格方案 */}
        <PriceCard />

        {/* 服务保障 */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">服务保障</h2>
            <p className="text-gray-400 mt-2">为您提供最优质的服务体验</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">品质保证</CardTitle>
                <CardDescription>
                  严格的质量控制流程，确保交付高品质的定制模板
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">准时交付</CardTitle>
                <CardDescription>
                  严格遵守约定时间，保证按时交付成果
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">持续支持</CardTitle>
                <CardDescription>
                  提供长期的技术支持和维护服务
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* 底部CTA */}
        <div className="text-center space-y-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            准备好开始您的定制之旅了吗？
          </h2>
          <p className="text-xl text-gray-400">
            立即联系我们，开启您的专属定制服务
          </p>
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 min-w-[160px]"
              onClick={() => window.open('your-consultation-link', '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              立即咨询
            </Button>
            <Button
              size="lg"
              variant="destructive"
              className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 min-w-[160px]"
              onClick={() => window.open('your-details-link', '_blank')}
            >
              <Plus className="w-4 h-4 mr-2" />
              了解更多
            </Button>
          </motion.div>

          {/* 添加额外的信息提示 */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>响应时间：24小时内</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>满意度保证</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>5星级服务</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
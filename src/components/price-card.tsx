'use client'
import { motion } from "framer-motion"
import {
  Sparkles, Zap, Crown, Building2, Check, ArrowRight, Shield,
  Rocket, Star, Gift, TrendingUp, Users, Lock, Gem,
  Timer
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import CountdownTimer from './countdown-timer'

const pricingPlans = [
  {
    title: "基础版",
    price: "￥198",
    originalPrice: "￥499",
    description: "适合个人使用的基础模板定制",
    features: [
      "3个核心功能模块",
      "基础界面定制",
      "7天内完成",
      "15天免费维护",
      "1次修改机会",
      "基础使用指导"
    ],
    icon: Zap,
    popular: false,
    tag: "超值选择",
    tagColor: "text-green-400 bg-green-500/10",
    cta: "立即抢购",
    savings: "省300元"
  },
  {
    title: "专业版",
    price: "￥698",
    originalPrice: "￥1698",
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
    popular: true,
    tag: "最受欢迎",
    tagColor: "text-blue-400 bg-blue-500/10",
    cta: "限时特惠",
    savings: "省1000元",
    highlight: true
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
    popular: false,
    tag: "企业首选",
    tagColor: "text-purple-400 bg-purple-500/10",
    cta: "立即咨询",
    enterprise: true
  }
]

export default function PricingCards() {
  return (
    <div className="w-full bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 促销标语 */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-1.5 rounded-full">
            <Timer className="w-4 h-4" />
            <span>限时优惠 - 48小时内购买享受特别折扣</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            选择最适合您的方案
          </h2>
          <p className="text-gray-400">
            所有方案均包含
            <span className="text-blue-400 mx-1">终身所有权</span>
            和
            <span className="text-blue-400 mx-1">免费更新</span>
          </p>
        </motion.div>

        {/* 价格卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* 热门标签 */}
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className={cn("shadow-lg", plan.tagColor)}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    {plan.tag}
                  </Badge>
                </div>
              )}

              <Card className={cn(
                "relative overflow-hidden bg-zinc-900/50 border-zinc-800 h-full transition-all duration-300",
                plan.highlight ? "border-blue-500/50 shadow-lg shadow-blue-500/20" : "hover:border-blue-500/30",
                "group"
              )}>
                {/* 背景效果 */}
                {plan.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                )}

                <div className="flex flex-col h-full p-6">
                  {/* 标题区域 */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                      </div>
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        plan.highlight ? "bg-blue-500" : "bg-zinc-800"
                      )}>
                        <plan.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* 价格区域 */}
                    <div className="space-y-1">
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">{plan.price}</span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                        )}
                      </div>
                      {plan.savings && (
                        <div className="flex items-center gap-1 text-green-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">{plan.savings}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 功能列表 */}
                  <div className="flex-1 mt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-blue-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 行动按钮 */}
                  <div className="flex-1  mt-6 space-y-3">
                    <Button
                      className={cn(
                        "w-full h-12 text-white transition-all duration-300",
                        plan.highlight
                          ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25"
                          : "bg-zinc-800 hover:bg-zinc-700"
                      )}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* 额外信息 */}
                  {plan.highlight && (
                    <div className="absolute -top-4 -right-4">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                        <Gift className="w-3 h-3 mr-1" />
                        赠送价值299元教程
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 信任背书 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">满意客户</div>
          </div>
          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-gray-400">客户评分</div>
          </div>
          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-gray-400">安全保障</div>
          </div>
          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <Lock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">终身</div>
            <div className="text-sm text-gray-400">所有权</div>
          </div>
        </div>

        {/* 紧迫感提示 */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            <span className="text-red-400">⚡ 限时优惠即将结束</span> - 现在下单可享受
            <span className="text-white font-bold mx-1">额外9折优惠</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
'use client'
import { motion } from "framer-motion"
import {
  MessageSquare,
  Mail,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { BsWechat } from "react-icons/bs"

const services = [
  {
    title: "个人服务",
    items: [
      { name: "生产力提升", href: "#productivity" },
      { name: "个人品牌打造", href: "#personal-brand" },
      { name: "职业生涯规划", href: "#career" },
      { name: "知识管理体系", href: "#knowledge" }
    ]
  },
  {
    title: "企业服务",
    items: [
      { name: "团队协作优化", href: "#team" },
      { name: "流程自动化", href: "#automation" },
      { name: "数据分析系统", href: "#analytics" },
      { name: "企业培训", href: "#training" }
    ]
  }
]

const contactInfo = [
  { icon: Clock, info: "工作时间：周一至周五 9:00-18:00" },
  { icon: Phone, info: "电话：+86 xxx xxxx xxxx" },
  { icon: Mail, info: "邮箱：contact@example.com" },
  { icon: BsWechat, info: "微信：LingXiaoYaoX" },
  { icon: MapPin, info: "地址：中国 深圳市 南山区" }
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "Github" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
]

export default function Footer() {
  return (
    <footer className=" border-t border-zinc-800 w-full bg-black p-4 md:p-3">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌区域 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">林逍遥Notion咨询定制</h3>
            <p className="text-gray-400 text-sm">
              专注于提供高质量的个人和企业效能提升服务，
              助力您实现卓越表现。
            </p>
            {/* 快速联系按钮 */}
            <div className="flex gap-3">
              <Button
                variant="default"
                className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                咨询
              </Button>
              <Button
                variant="default"
                className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              >
                <Mail className="w-4 h-4 mr-2" />
                邮件
              </Button>
            </div>
          </div>

          {/* 服务列表 */}
          {services.map((service) => (
            <div key={service.title} className="space-y-4">
              <h4 className="text-white font-semibold">{service.title}</h4>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-1 text-sm"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* 联系信息 */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">联系我们</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li
                  key={item.info}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <item.icon className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{item.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} 林逍遥Notion咨询 | 定制. All rights reserved.
            </p>

            {/* 社交媒体链接 */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
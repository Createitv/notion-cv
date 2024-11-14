'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { BookOpen, Send } from "lucide-react"
import { BsWechat } from "react-icons/bs"

const socialLinks = [
  {
    name: "微信",
    icon: BsWechat,
    color: "text-[#07C160]",
    bgColor: "bg-[#07C160]/10",
    hoverColor: "hover:bg-[#07C160]/20",
    qrCode: "/qrcode.png", // 替换为你的二维码图片
    showQR: true
  },
  {
    name: "知乎",
    icon: BookOpen,
    color: "text-[#0084FF]",
    bgColor: "bg-[#0084FF]/10",
    hoverColor: "hover:bg-[#0084FF]/20",
    link: "https://zhihu.com/people/your-profile", // 替换为你的知乎链接
    showQR: false
  },
  {
    name: "小红书",
    icon: Send,
    color: "text-[#FE2C55]",
    bgColor: "bg-[#FE2C55]/10",
    hoverColor: "hover:bg-[#FE2C55]/20",
    link: "https://xiaohongshu.com/user/profile/your-id", // 替换为你的小红书链接
    showQR: false
  }
]

export default function SocialLinks() {
  const [activeQR, setActiveQR] = useState<string | null>(null)

  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-zinc-900/90 backdrop-blur-sm 
                 rounded-xl p-2 border border-zinc-800/50 shadow-xl"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-2">
        {socialLinks.map((item) => (
          <motion.div
            key={item.name}
            className="relative group"
            onMouseEnter={() => item.showQR && setActiveQR(item.name)}
            onMouseLeave={() => setActiveQR(null)}
          >
            {item.showQR ? (
              <div className="w-10 h-10 cursor-pointer">
                <motion.div
                  className={`w-full h-full rounded-lg flex items-center justify-center
                            transition-all duration-200 ${item.bgColor} ${item.hoverColor}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </motion.div>
              </div>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 block"
              >
                <motion.div
                  className={`w-full h-full rounded-lg flex items-center justify-center
                            transition-all duration-200 ${item.bgColor} ${item.hoverColor}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </motion.div>
              </a>
            )}

            {/* 悬浮提示 */}
            <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-800 
                          text-white text-sm opacity-0 group-hover:opacity-100 
                          transition-all duration-200 translate-x-[10px] group-hover:translate-x-0
                          border border-zinc-700/50 shadow-lg whitespace-nowrap">
              {item.name}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 
                            bg-zinc-800 rotate-45 border-r border-t border-zinc-700/50" />
            </div>

            {/* 微信二维码 */}
            {item.showQR && activeQR === item.name && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-full mr-12 bottom-0 bg-white p-2 rounded-lg shadow-xl"
              >
                <Image
                  src={item.qrCode}
                  alt="WeChat QR Code"
                  width={120}
                  height={120}
                  className="rounded"
                />
                <div className="text-xs text-center mt-1 text-gray-500">
                  扫码添加
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 
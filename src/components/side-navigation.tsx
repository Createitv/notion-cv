'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MessageCircle, Layout } from "lucide-react" // 添加 Layout 图标
import { cn } from "@/lib/utils"

const navItems = [
  {
    icon: Home,
    href: "/",
    label: "首页",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20"
  },
  {
    icon: Layout, // 新增模板定制图标
    href: "/template",
    label: "模板定制",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    hoverColor: "hover:bg-purple-500/20"
  },
  {
    icon: MessageCircle,
    href: "/contact",
    label: "联系我们",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20"
  }
]

export default function SideNavigation() {
  const pathname = usePathname()

  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-zinc-900/50 backdrop-blur-sm rounded-full p-3 border border-zinc-800"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
          >
            <motion.div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "transition-all duration-300 cursor-pointer",
                item.bgColor,
                item.hoverColor,
                "group relative"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className={cn(
                "w-5 h-5",
                item.color,
                "transition-transform group-hover:scale-110"
              )} />

              {/* 悬浮提示 - 优化样式 */}
              <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-zinc-800/90 
                            backdrop-blur-sm text-white text-sm opacity-0 group-hover:opacity-100 
                            transition-all duration-200 translate-x-[-10px] group-hover:translate-x-0
                            border border-zinc-700/50 shadow-lg whitespace-nowrap">
                {item.label}
                <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-800/90 
                              rotate-45 border-l border-b border-zinc-700/50" />
              </div>

              {/* 活动指示器 - 优化动画 */}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeIndicator"
                  className={cn(
                    "absolute inset-0 border-2 rounded-full",
                    `border-${item.color.split('-')[1]}-500/50`
                  )}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
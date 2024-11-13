'use client'

import React, { useEffect, useRef } from 'react'
import {
  FaWeixin,
  FaWeibo,
  FaTiktok,
  FaMusic,
  FaBook,
  FaInstagram
} from 'react-icons/fa'

const socialPlatforms = [
  {
    name: "微信",
    icon: FaWeixin,
    url: "https://weixin.qq.com/",
    color: "hover:text-green-500"
  },
  {
    name: "微博",
    icon: FaWeibo,
    url: "https://weibo.com/",
    color: "hover:text-red-500"
  },
  {
    name: "抖音",
    icon: FaTiktok,
    url: "https://www.douyin.com/",
    color: "hover:text-pink-500"
  },
  {
    name: "网易云音乐",
    icon: FaMusic,
    url: "https://music.163.com/",
    color: "hover:text-red-600"
  },
  {
    name: "知乎",
    icon: FaBook,
    url: "https://www.zhihu.com/",
    color: "hover:text-blue-500"
  },
  {
    name: "小红书",
    icon: FaInstagram,
    url: "https://www.xiaohongshu.com/",
    color: "hover:text-rose-500"
  }
]

export default function Component() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed here

      scrollElement.style.setProperty('--scroll-width', `${scrollWidth}px`)
      scrollElement.style.setProperty('--animation-duration', `${animationDuration}s`)
    }
  }, [])

  return (
    <div className="w-full bg-black p-4 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex items-center justify-center gap-8 animate-marquee"
        style={{
          '--scroll-width': '0px',
          '--animation-duration': '0s',
        } as React.CSSProperties}
      >
        {[...socialPlatforms].map((platform, index) => (
          <a
            key={`${platform.name}-${index}`}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transition-colors ${platform.color} group cursor-pointer flex flex-col items-center justify-center gap-2`}
          >
            <div className="relative transition-transform duration-200 ease-in-out transform group-hover:scale-110">
              <platform.icon className="w-8 h-8" />
            </div>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {platform.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
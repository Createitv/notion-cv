'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import SocialMediaBar from "./social-media-bar"
import { Button } from "./ui/button"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* 个人信息卡片 */}
          <Card className=" bg-black border-zinc-800 p-6">
            <div className="flex items-center gap-4 justify-start">
              <div className="relative w-12 h-12">
                <Image
                  src="/lxy.jpeg" // 替换为你的头像
                  alt="林道遥"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">林逍遥</h1>
                <p className="text-gray-400 text-sm">Wechat： LingXiaoYaoX</p>
              </div>
              <div className="ml-auto">
                <Link href="/">
                  <Button variant="secondary">
                    返回首页
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg text-white flex items-center gap-2">
                Hello I Am Notion 认证创作者 👋
              </h2>
              <p className="mt-2 text-gray-400">
                The Notion Guy, 帮助您善组织和生产力，释放您的全部潜力
              </p>
            </div>

            {/* 二维码区域 */}
            <div className="mt-8 flex flex-col items-center">
              <div className="w-48 h-48 bg-white p-2 rounded-lg">
                <Image
                  src="/qrcode.png" // 替换为你的二维码图片
                  alt="WeChat QR Code"
                  width={360}
                  height={360}
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                扫一扫上方二维码，可以与我取得联系
              </p>
            </div>
            <section className="">
              <SocialMediaBar />
            </section>

          </Card>
        </motion.div>
      </div>
    </div>
  )
}

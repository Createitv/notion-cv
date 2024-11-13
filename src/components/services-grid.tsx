import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Layout, Globe2, Share2, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: "Notion相关咨询",
    description: "一切notion相关问题，知无不言",
    href: "/consultation"
  },
  {
    icon: Globe2,
    title: "Notion视频教程",
    description: "开发Notion视频教程，帮助你快速掌握Notion",
    href: "/tutorials"
  },
  {
    icon: Layout,
    title: "Notion模版定制",
    description: "明确你想要模板实现的功能和目的，比如是用于项目管理、会议记录、个人日记，按需定制",
    href: "/templates"
  },
  {
    icon: Share2,
    title: "Notion使用经验交流",
    description: "个人使用习惯、团队协作技巧、效率提升方法、以及如何通过Notion实现个人或团队的项目管理",
    href: "/experience"
  }
]

export default function Component() {
  return (
    <div className="w-full bg-black  p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">我提供的服务</h2>
          </div>
          <p className="text-gray-400">
            教授他人如何使用Notion，通过教学进一步巩固了我的知识和技能
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="block group"
            >
              <Card className="bg-zinc-900 border-zinc-800 h-full transition-transform duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1.5 flex-grow">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">
                          {service.title}
                        </CardTitle>
                        <ArrowUpRight className="w-5 h-5 text-white opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      </div>
                      <CardDescription className="text-gray-400">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
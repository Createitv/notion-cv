'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageSquare, Star, Quote, User, Building2, Calendar, MousePointerClick } from 'lucide-react'
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "张小姐",
    company: "某科技公司",
    role: "产品总监",
    avatar: "https://framerusercontent.com/images/jIROGJdWxMD38XHNuQCQm7vPQQ.jpg?scale-down-to=1024",
    summary: "帮助我们重构了整个团队的工作流程",
    rating: 5,
    date: "2024-03-14",
    dialogContent: {
      title: "深度项目合作反馈",
      quote: "通过这次合作，我们团队的效率提升了至少40%",
      details: [
        "• 完全理解我们的业务需求",
        "• 提供了定制化的解决方案",
        "• 响应速度快，服务态度好",
        "• 后续支持非常到位",
        "• 性价比很高"
      ],
      results: "项目上线后，团队协作效率显著提升，客户满意度提高了35%。",
      recommendation: "强烈推荐给有团队协作需求的公司。"
    }
  },
  {
    name: "李女士",
    company: "某教育机构",
    role: "运营总监",
    avatar: "https://framerusercontent.com/images/Qv3cMS54UvqBtHl9SBHHOZL2uw.jpg?scale-down-to=1024",
    summary: "为我们搭建了完整的数据管理体系",
    rating: 5,
    date: "2024-06-13",
    dialogContent: {
      title: "教育行业定制方案反馈",
      quote: "终于找到了适合教育行业的管理工具",
      details: [
        "• 深入了解教育行业特点",
        "• 方案简单易用",
        "• 培训支持很到位",
        "• 持续优化改进",
        "• 学员反馈很好"
      ],
      results: "实现了教学管理的数字化转型，节省了大量人力成本。",
      recommendation: "特别适合教育培训机构使用。"
    }
  },
  {
    name: "王老师",
    company: "某培训机构",
    role: "创始人",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    summary: "让我的个人工作室运营更加规范",
    rating: 5,
    date: "2024-11-15",
    dialogContent: {
      title: "小型工作室解决方案",
      quote: "一个人也能高效管理整个工作室",
      details: [
        "• 个性化定制方案",
        "• 操作简单直观",
        "• 性价比很高",
        "• 服务很贴心",
        "• 效果超出预期"
      ],
      results: "工作效率提升80%，客户管理更加轻松。",
      recommendation: "推荐给所有小型工作室。"
    }
  },
  {
    name: "陈小姐",
    company: "某咨询公司",
    role: "项目经理",
    avatar: "https://framerusercontent.com/images/w8Zy8PRuZ8uaFLPqcvVCqR4AeuI.jpg?scale-down-to=512",
    summary: "提供了专业的项目管理解决方案",
    rating: 5,
    date: "2024-11-15",
    dialogContent: {
      title: "项目管理优化方案",
      quote: "现在管理多个项目也不会感到混乱了",
      details: [
        "• 项目进度一目了然",
        "• 团队协作更顺畅",
        "• 客户沟通更高效",
        "• 数据分析很实用",
        "• 持续优化服务"
      ],
      results: "项目交付效率提升50%，客户满意度显著提高。",
      recommendation: "值得信赖的合作伙伴。"
    }
  }
]

export default function CustomerTestimonials() {
  return (
    <div className="w-full bg-black p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Quote className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">客户评价</h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MousePointerClick className="w-4 h-4 animate-bounce" />
            <p className="text-sm md:text-base">点击查看详细评价</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Dialog key={testimonial.name}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-zinc-900 border-zinc-800 cursor-pointer group hover:border-blue-500/50 transition-colors">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">
                              {testimonial.name}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Building2 className="w-3 h-3" />
                              <span>{testimonial.company}</span>
                              <span>·</span>
                              <span>{testimonial.role}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <CardDescription className="text-gray-400">
                        "{testimonial.summary}"
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{testimonial.date}</span>
                        </div>
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          查看详情 <MessageSquare className="w-3 h-3" />
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="bg-zinc-900 border-zinc-800 w-[90vw] md:w-full max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-white">
                    {testimonial.dialogContent.title}
                  </DialogTitle>
                </DialogHeader>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-lg text-gray-300 italic">
                    "{testimonial.dialogContent.quote}"
                  </div>

                  <div className="space-y-2">
                    {testimonial.dialogContent.details.map((detail, i) => (
                      <motion.p
                        key={i}
                        className="text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-zinc-800">
                    <p className="text-gray-300">
                      <span className="font-semibold">项目成果：</span>
                      {testimonial.dialogContent.results}
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">推荐语：</span>
                      {testimonial.dialogContent.recommendation}
                    </p>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
} 
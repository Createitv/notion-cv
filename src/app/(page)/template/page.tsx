import ServiceProcess from '@/components/service-process-grid'
import TemplateCustomization from '@/components/template-customization'
import React from 'react'

type Props = {}

export default function TemplatePage({ }: Props) {
  return (
    <div className='min-h-screen mx-auto min-w-96'>
      <TemplateCustomization></TemplateCustomization>
    </div>
  )
}
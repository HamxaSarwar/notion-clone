import React from 'react';
import { FileText, CheckCircle, Share2, LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FileText,
    title: "Notes & docs",
    description: "Simple, powerful, beautiful. All your work in one place."
  },
  {
    icon: CheckCircle,
    title: "Tasks & projects",
    description: "Kanban boards, calendars, reminders, and more."
  },
  {
    icon: Share2,
    title: "Knowledge base & wikis",
    description: "Turn tribal knowledge into shared knowledge."
  }
]

const Features: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        All-in-one workspace
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <feature.icon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
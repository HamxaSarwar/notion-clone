import React from 'react'
import Link from "next/link"

interface FooterColumn {
  title: string;
  links: string[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: ["Wikis", "Projects", "Docs"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"]
  },
  {
    title: "Resources",
    links: ["Blog", "Help center", "Community"]
  },
  {
    title: "Connect",
    links: ["Twitter", "LinkedIn", "Instagram"]
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {footerColumns.map((column, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4">{column.title}</h4>
            <ul className="space-y-2">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link className="text-sm text-gray-600 hover:text-gray-900" href="#">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Notion. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
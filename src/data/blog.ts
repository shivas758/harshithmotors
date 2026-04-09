export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-choose-car-service-center",
    title: "How to Choose the Right Car Service Center in Hyderabad",
    excerpt:
      "A comprehensive guide to selecting a reliable multi-brand car workshop in Hyderabad. Learn what to look for, questions to ask, and red flags to avoid.",
    category: "Guide",
    readTime: "5 min read",
    date: "2024-12-15",
  },
  {
    id: "signs-car-needs-service",
    title: "Signs Your Car Needs Immediate Service",
    excerpt:
      "Learn to recognize the critical indicators that your vehicle requires professional attention. Don't ignore these warning signs that could lead to expensive repairs.",
    category: "Tips",
    readTime: "4 min read",
    date: "2024-11-20",
  },
  {
    id: "regular-service-importance",
    title: "Why Regular Car Service is Essential in Indian Conditions",
    excerpt:
      "How periodic maintenance protects your vehicle from harsh Indian roads, dust, extreme heat, and monsoon conditions. A must-read for every car owner in Hyderabad.",
    category: "Maintenance",
    readTime: "6 min read",
    date: "2024-10-10",
  },
  {
    id: "ac-maintenance-tips",
    title: "Essential Car AC Maintenance Tips for Hyderabad Summers",
    excerpt:
      "Keep your car cool during scorching Hyderabad summers with these practical AC maintenance tips. Learn when to service, common problems, and prevention methods.",
    category: "Tips",
    readTime: "4 min read",
    date: "2024-09-05",
  },
]

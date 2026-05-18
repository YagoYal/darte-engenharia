export interface Service {
  id: string
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface NavLink {
  label: string
  href: string
}

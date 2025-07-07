import { LucideIcon, Sparkles, Zap, Star, Heart, BookOpen } from 'lucide-react'

export interface SiteConfig {
  // 기본 사이트 정보
  name: string
  shortName: string
  description: string
  url: string
  
  // 메타데이터
  keywords: string[]
  author: {
    name: string
    email?: string
    url?: string
  }
  
  // 로고 및 브랜딩
  logo: {
    icon: LucideIcon
    text: string
    showText?: boolean
  }
  
  // 소셜 링크
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
    email?: string
  }
  
  // 내비게이션
  navigation: {
    header: NavItem[]
    footer?: NavItem[]
  }
  
  // SEO 설정
  seo: {
    defaultImage?: string
    twitterHandle?: string
    locale: string
  }
  
  // 기능 설정
  features: {
    search: boolean
    darkMode: boolean
    analytics?: string
    comments?: boolean
  }
}

export interface NavItem {
  href: string
  label: string
  icon?: LucideIcon
  external?: boolean
}

// 사이트 설정
export const siteConfig: SiteConfig = {
  // 기본 사이트 정보
  name: "Jiwon's Blog",
  shortName: "Jiwon",
  description: "개발자 지원의 일상과 기술에 대한 이야기를 담은 개인 블로그입니다. Notion으로 작성하고 Next.js로 구현했습니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jiwon.me",
  
  // 메타데이터
  keywords: [
    "개발자", 
    "블로그", 
    "프론트엔드", 
    "백엔드", 
    "웹개발", 
    "프로그래밍",
    "기술블로그",
    "개인블로그",
    "notion", 
    "nextjs", 
    "react", 
    "typescript"
  ],
  author: {
    name: "Jiwon",
    email: "hello@jiwon.me",
    url: "https://jiwon.me"
  },
  
  // 로고 및 브랜딩
  logo: {
    icon: BookOpen, // Sparkles, Zap, Star, Heart, BookOpen 등에서 선택 가능
    text: "Jiwon",
    showText: true
  },
  
  // 소셜 링크
  social: {
    github: "https://github.com/jiwon-me",
    email: "hello@jiwon.me"
  },
  
  // 내비게이션
  navigation: {
    header: [
      { href: '/', label: 'Home' },
      { href: '/articles', label: 'Articles' },
      { href: '/about', label: 'About' }
    ],
    footer: [
      { href: '/about', label: 'About' },
      { href: '/articles', label: 'Articles' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' }
    ]
  },
  
  // SEO 설정
  seo: {
    locale: "ko_KR" // 한국어 설정
  },
  
  // 기능 설정
  features: {
    search: true,
    darkMode: true,
    analytics: process.env.NEXT_PUBLIC_GA_ID,
    comments: false
  }
}

// 환경별 설정을 위한 헬퍼 함수
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  return 'http://localhost:3000'
}

// 메타데이터 생성을 위한 헬퍼 함수
export function getMetadataBase() {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      locale: siteConfig.seo.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      creator: siteConfig.seo.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
} 
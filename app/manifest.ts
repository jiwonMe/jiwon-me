import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jiwon\'s Blog - 개발자 지원의 기술 블로그',
    short_name: 'Jiwon\'s Blog',
    description: '개발자 지원의 일상과 기술에 대한 이야기를 담은 개인 블로그',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
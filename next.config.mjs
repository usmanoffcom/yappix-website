/** @type {import('next').NextConfig} */

// Incident mode: hard-disable CDN assetPrefix until CDN path is stable.
// This prevents chunk/font loading from cdn.yappix.ru during outages.

const nextConfig = {
  assetPrefix: undefined,

  /** Three.js / R3F ship modern ESM — без transpile Webpack иногда даёт runtime `reading 'call'` на чанках */
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime', 'gsap', 'react-google-recaptcha-v3'],

  // TypeScript configuration
  typescript: {
    // Enable type checking in build
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Ignore during production build
    ignoreDuringBuilds: true,
  },

  // Image optimization - включаем оптимизацию
  images: {
    // Включаем оптимизацию изображений
    unoptimized: false,
    // Форматы для оптимизации
    formats: ['image/avif', 'image/webp'],
    // Размеры для responsive изображений
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Domains для внешних изображений
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yappix.ru',
      },
      {
        protocol: 'https',
        hostname: 'cdn.yappix.ru',
      },
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
      },
    ],
    // Минимизация качества для production
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
  },

  // Experimental features for performance
  experimental: {
    // Enable optimizeCss for better CSS loading
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Compression
  compress: true,

  // Power by header removal for security
  poweredByHeader: false,

  // Strict mode for better development
  reactStrictMode: true,

  // Generate unique build ID
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Кэширование _next/static (JS, CSS) - 1 год
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование изображений в /images/ - 1 год
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование изображений в /Logos/ - 1 год
        source: '/Logos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование /sk_it/ - 1 год
        source: '/sk_it/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование шрифтов - 1 год
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование изображений - 1 год
        source: '/:path*.(ico|png|svg|jpg|jpeg|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Видео файлы - поддержка range requests для стриминга
        source: '/:path*.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
      {
        // Видео файлы QuickTime - поддержка range requests
        source: '/:path*.MOV',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'Content-Type',
            value: 'video/quicktime',
          },
        ],
      },
      {
        // WebM видео
        source: '/:path*.webm',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'Content-Type',
            value: 'video/webm',
          },
        ],
      },
      {
        // Кэширование manifest и других статических файлов - 1 неделя
        source: '/:path*.(webmanifest|xml|txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Кэширование grid.svg
        source: '/grid.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Убираем мусорные query (Apache/индексация): ?C=D;O=D и т.п. → каноничный /
      {
        source: '/',
        has: [{ type: 'query', key: 'C' }],
        destination: '/',
        permanent: true,
      },
      // Редирект с www на non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.yappix.ru',
          },
        ],
        destination: 'https://yappix.ru/:path*',
        permanent: true,
      },
      // yappix.net → yappix.ru
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yappix.net' }],
        destination: 'https://yappix.ru/:path*',
        permanent: true,
      },
      // yappix.studio → yappix.ru
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yappix.studio' }],
        destination: 'https://yappix.ru/:path*',
        permanent: true,
      },
      // Редирект старых URL если нужно
      {
        source: '/services',
        destination: '/uslugi',
        permanent: true,
      },
      {
        source: '/cases',
        destination: '/kejsy',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/o-kompanii',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/kontakty',
        permanent: true,
      },
      // Старые/альтернативные URL услуг → актуальные slug
      {
        source: '/uslugi/fintech-resheniya',
        destination: '/uslugi/fintech',
        permanent: true,
      },
      {
        source: '/uslugi/devops-uslugi',
        destination: '/uslugi/devops',
        permanent: true,
      },
      // EN mirror paths that never existed (language switcher used /en + RU path) → valid EN URLs
      { source: '/en/uslugi', destination: '/en/services', permanent: true },
      { source: '/en/uslugi/:path*', destination: '/en/services', permanent: true },
      { source: '/en/politika-konfidencialnosti', destination: '/en/privacy-policy', permanent: true },
      { source: '/en/razrabotka-sajtov-moskva', destination: '/en/software-development-moscow', permanent: true },
      { source: '/en/razrabotka-sajtov-ssha', destination: '/en/software-development-usa', permanent: true },
      { source: '/en/razrabotka-sajtov-germaniya', destination: '/en/software-development-germany', permanent: true },
      { source: '/en/razrabotka-sajtov-turciya', destination: '/en/software-development-turkey', permanent: true },
      { source: '/en/razrabotka-sajtov-serbiya', destination: '/en/software-development-serbia', permanent: true },
      { source: '/en/razrabotka-sajtov-kazahstan', destination: '/en/software-development-kazakhstan', permanent: true },
    ]
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        // Кэширование статических ресурсов
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование шрифтов
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Кэширование иконок
        source: '/(.*\\.ico|.*\\.png|.*\\.svg)',
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
    ]
  },
}

export default nextConfig

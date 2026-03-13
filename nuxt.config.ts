export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/global.css'],
  runtimeConfig: {
    public: {
      whatsappNumber: process.env.WHATSAPP_NUMBER,
      whatsappMessage: process.env.WHATSAPP_MESSAGE,
    }
  },
  devServer: {
    host: '192.168.3.54',
    port: 8080
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Deck do Pai — Hamburgueria Artesanal & Espetaria',
      meta: [
        { name: 'description', content: 'Deck do Pai — Burgers artesanais e espetos na brasa em Várzea Paulista, SP. Peça pelo WhatsApp ou iFood. Aberto de quarta a segunda, das 18:30 às 23:00.' },
        { property: 'og:title', content: 'Deck do Pai — Hamburgueria Artesanal & Espetaria' },
        { property: 'og:description', content: 'Burgers artesanais e espetos na brasa em Várzea Paulista, SP.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap'
        }
      ]
    }
  }
})

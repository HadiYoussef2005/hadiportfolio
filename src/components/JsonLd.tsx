export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hadi Youssef',
    url: 'https://hyoussef.tech',
    sameAs: [
      'https://www.linkedin.com/in/hadi-youssef/',
      'https://github.com/HadiYoussef2005',
    ],
    jobTitle: 'Software Engineering Student',
    worksFor: {
      '@type': 'Organization',
      name: 'Western University'
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Western University'
      },
      {
        '@type': 'Organization',
        name: 'Ivey Business School'
      }
    ],
    knowsAbout: ['Python', 'Next.js', 'TypeScript', 'Quantitative Finance', 'Software Engineering']
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

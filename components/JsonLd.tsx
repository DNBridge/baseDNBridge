import { buildHomeJsonLd } from '@/lib/seo/json-ld'

export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((schema) => (
        <script
          key={schema['@id'] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export function HomeJsonLd() {
  return <JsonLd data={buildHomeJsonLd()} />
}

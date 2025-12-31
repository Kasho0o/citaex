import Link from 'next/link';

interface BlogPostLayoutProps {
  title: string;
  description: string;
  date: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, description, date, children }: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Volver al Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600 mb-2">{description}</p>
            <time className="text-sm text-gray-500">{date}</time>
          </header>
          
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </article>
        
        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda con tu cita?</h3>
          <a 
            href="https://wa.me/923221430630" 
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

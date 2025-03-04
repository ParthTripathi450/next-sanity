import { getBooks} from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const books = await getBooks();

  return (
    <div className="m-0 p-0 font-[Quicksand,sans-serif] bg-[#f8f8f6] text-[#333]">

      {/* Header */}
      <header className="flex justify-between items-center px-[100px] py-[20px] bg-[#f8f8f6]">
        {/* Logo */}
        <div className="logo">
          <img src="/owlAthena-coloured.jpg" alt="Athena Dracko Logo" className="w-[50px] h-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center shadow-none ">
          <ul className="flex gap-[40px] list-none m-0 p-0">
            <li>
              <a href="/" className="text-[#777] text-[16px] relative transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full">
                Home
              </a>
            </li>
            <li>
              <a href="/Newsletter" className="text-[#777] text-[16px] relative transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full">
                Newsletters
              </a>
            </li>
            <li>
              <a href="/History" className="text-[#777] text-[16px] relative transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full">
                Climate Histories
              </a>
            </li>
            <li>
              <a href="/Article" className="text-[#777] text-[16px] relative transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full">
                Articles
              </a>
            </li>
            <li>
              <a href="/Book" className="text-[#777] text-[16px] relative transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full">
                Books
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="text-center opacity-100">
      <h1 className="font-[Didot,serif] font-bold text-[35px] text-[#252424] mb-10 mr-5 border-b border-black block">
          Books
        </h1>
      </div>

      {/* Projects Section */}

      <div className="max-w-7xl mx-auto mt-6 space-y-6 px-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="max-w-[800px] min-h-[250px] m-auto mt-4 bg-[#f8f8f6] p-8 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.15)] hover:rounded-xl hover:bg-[#f8f8f6]"
          >
            <Link href={`/Book/books/${book.slug}`}>
              {/* Layout: Image and Content Side by Side */}
              <div className="flex items-start gap-6 flex-wrap">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-[18px] font-bold leading-normal">
                    {book.title}
                  </h2>

                  {/* Short Description (No Extra Space) */}
                  <p className="text-gray-700 text-[14px] leading-relaxed mt-6">
                    {book.shortDescription}
                  </p>

                  {/* Author & Date (Compact) */}
                  <div className="text-gray-600 text-[13px] mt-2">
                    • {book.author} • {book.date}
                  </div>
                </div>

                {/* Right: Image (Larger) */}
                {book.image && (
                  <div className="flex-shrink-0 w-[250px] h-[160px]">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={250}
                      height={160}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="border-b border-gray-300 mt-5"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


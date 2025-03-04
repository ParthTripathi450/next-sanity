import { getPages } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const pages = await getPages();

  return (
    <div className="bg-[#f8f8f6] text-[#333] font-[Quicksand,serif] min-h-screen">

      <header className="flex justify-between items-center p-5 md:px-24 bg-[#f8f8f6]">
        <div className="logo">
          <Image src="/owlAthena-coloured.jpg" alt="Athena Dracko Logo" width={50} height={50} />
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-10 list-none m-0 p-0">
            {[
              { href: '/', label: 'Home' },
              { href: '/Newsletter', label: 'Newsletters' },
              { href: '/History', label: 'Climate Histories' },
              { href: '/Article', label: 'Articles' },
              { href: '/Book', label: 'Books' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-[#777] text-[16px] transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>


      <div className="text-center py-[170px] px-[20px]">
        <h1 className="font-[Didot,serif] font-bold text-[75px] text-[#252424] mb-10 ml-[150px] mr-[800px] text-left leading-[0.9]">
          I'm Athena Drakou.
        </h1>
        <p className="font-[Didot,serif] text-[20px] text-[#434343] mb-5 ml-[150px] mr-[480px] text-left">
          An independent researcher working at the intersection of environmental science, political history, and global affairs. I am particularly interested in the history of climate change politics and how ideology and competing perspectives influence climate change policies.
        </p>
      </div>


      <footer className="text-center py-3 text-[#272626b4] text-sm bg-[#dbd6d6]">
        &copy;2025 by Parth Tripathi.
      </footer>
    </div>
  );
}
import { getNewsletter } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/sanity-utils"; 



const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;

      return (
        <div className="flex flex-col items-center my-6">
          <Image
            src={urlFor(value).url()} // Convert Sanity image reference to URL
            alt={value.alt || "Content Image"}
            width={600}
            height={400}
            className="w-full max-w-[300px] h-auto max-h-[400px] rounded-md"
          />
          {value.imageCaption && (
            <figcaption className="text-sm text-gray-500 mt-2 italic text-center w-full">
            {value.imageCaption}
          </figcaption>
          )}
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="text-[19px] text-center font-['Didot',serif] font-[500] text-[#474545] opacity-100">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl text-center font-extrabold text-center mt-6 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl text-center font-bold text-center mt-6 mb-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl text-center font-semibold text-center mt-5 mb-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg text-center font-medium text-center mt-4 mb-3">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base text-center font-medium text-center mt-4 mb-3">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm text-center font-normal text-center mt-2 mb-3">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#474545]">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};



type Props = {
  params: { newsletter: string };
};

export default async function Newsletter({ params }: Props) {
    const slug = params.newsletter; 
    const newsletter = await getNewsletter(slug);
  
    return (
        <div className="min-h-screen bg-[#f8f8f6] text-[#333]">
            <header className="flex justify-between items-center px-[100px] py-[20px] bg-[#f8f8f6]">
                <div className="logo">
                <Image

                    src="/owlAthena-coloured.jpg"
                    alt="Athena Dracko Logo"
                    width={50}
                    height={50}
                    className="w-[50px] h-auto"
                />
                </div>
                <nav>
                <ul className="flex gap-[40px] list-none m-0 p-0">
                    <li>
                    <Link
                        href="/Newsletter"
                        className="text-[#777] text-[16px] relative transition-colors duration-300 hover:text-[#252424] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#252424] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Back
                    </Link>
                    </li>
                </ul>
                </nav>
            </header>
            <main className="text-center opacity-100">
                <h2 className="font-[Didot,serif] text-[35px] font-extrabold text-[#434343] mb-5 mr-5 border-b border-black block">
                    {newsletter.title}
                </h2>
                {newsletter.image && (
                    <div className="flex justify-center items-center mt-8">
                        <div className="relative w-full max-w-[700px]">
                        <Image
                            src={newsletter.image}
                            alt="Project Image"
                            width={700}
                            height={400}
                            className="w-full h-auto max-h-[400px] object-contain rounded-md"
                        />
                          <div>
                            <figcaption className="text-sm text-gray-500 mt-2 italic text-center w-full">{newsletter.imageCaption}</figcaption>
                          </div>
                        </div>
                    </div>
                )}
        
                {/* Content Section */}
                <div className="mt-8 mx-auto text-left leading-relaxed text-[#434343] max-w-7xl">
                    <PortableText value={newsletter.content} components={components} />
                </div>
            </main>
        </div>

    );
  }

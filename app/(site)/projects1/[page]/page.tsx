import { getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/sanity-utils"; 



const components: PortableTextComponents = {
    types: {
      image: ({ value }: any) => {
        // Ensure value exists
        if (!value?.asset?._ref) return null;
  
        return (
          <div className="flex justify-center my-6">
            <Image
              src={urlFor(value).url()} // Convert Sanity image reference to URL
              alt={value.alt || "Content Image"}
              width={600}
              height={400}
              className="w-full max-w-[600px] h-auto rounded-md"
            />
          </div>
        );
      },
    },
  };


type Props = {
  params: { page: string };
};

export default async function Page({ params }: Props) {
    const slug = params.page;
    const page = await getPage(slug);
  
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
                        href="/"
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
                    {page.title}
                </h2>
                {page.image && (
                    <div className="flex justify-center items-center mt-8">
                        <div className="relative w-full max-w-[700px]">
                        <Image
                            src={page.image}
                            alt="Project Image"
                            width={700}
                            height={400}
                            className="w-full h-auto max-h-[400px] object-contain rounded-md"
                        />
                        </div>
                    </div>
                )}
        
                {/* Content Section */}
                <div className="mt-8 text-left leading-relaxed text-[#434343]">
                    <PortableText value={page.content} components={components} />
                </div>
            </main>
        </div>

    );
  }

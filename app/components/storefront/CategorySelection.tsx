import Image from "next/image";
import Link from "next/link";
import all from "@/public/all.jpeg"
import men from "@/public/men.jpeg"
import women from "@/public/women.jpeg"

export function CategoriesSelection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-extrabold tracking-tight">Shop by Category</h2>
                <Link href="/products/all" className="text-md font-semibold text-primary hover:text-primary/80">Browse all Products &rarr;</Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
                    <Image src={all} alt="All Products Image" className="object-cover object-center" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-45" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="text-white text-xl font-semibold">All Products</h3>
                            <p className="mt-1 text-sm text-md text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none">
                    <Image src={men} alt="Products for Men" className="object-cover object-bottom sm:absolute sm:inset-0 sm:w-full sm:h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-45 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/men">
                            <h3 className="text-white text-xl font-semibold">Mens Product</h3>
                            <p className="mt-1 text-sm text-md text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none">
                    <Image src={women} alt="Womens's Product" className="object-cover object-bottom sm:absolute sm:inset-0 sm:w-full sm:h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-45 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/women">
                            <h3 className="text-white text-xl font-semibold">Products for Women</h3>
                            <p className="mt-1 text-sm text-md text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
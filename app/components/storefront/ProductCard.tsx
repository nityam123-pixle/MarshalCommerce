import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

interface iAppProps{
    item: {
            id: string;
            name: string;
            description: string;
            price: number;
            images: string[];
    }
}


export function ProductCard({ item }: iAppProps) {
    if (!item || !item.images) return null;

    return (
        <div className="rounded-xl overflow-hidden">
            <Carousel className="w-full mx-auto">
                <CarouselContent>
                    {item.images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[330px]">
                                <Image
                                    src={image}
                                    alt={`${item.name} - Image ${index + 1}`}
                                    fill
                                    className="object-cover object-center w-full h-full rounded-lg "
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16" />
                <CarouselNext className="mr-16" />
            </Carousel>

            <div className="flex justify-between items-center mt-2">
                <h1 className="font-semibold text-xl">{item.name}</h1>
                <h3 className="inline-flex items-center rounded-lg bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10">₹{item.price}</h3>
            </div>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>

            <Button asChild className="w-full mt-5">
                <Link href={`/product/${item.id}`}>View Product</Link>
            </Button>
        </div>
    );
}

export function LoadingProductCard() {
    return (
        <div className="flex flex-col">
            <Skeleton className="w-full h-[330px]"/>
            <div className="flex flex-col mt-2 gap-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-full w-4" />
            </div>
            <Skeleton className="w-full h-10 mt-5" />
        </div>
    )
}
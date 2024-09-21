import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontalIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'

        }
    })

    return data
}

export default async function ProductsRoute() {
    const data = await getData()
    return (
        <>
            <div className="flex items-center justify-end">
                <Button asChild className="flex items-center gap-2">
                    <Link href="/dashboard/products/create">
                    <PlusCircle className="size-3.5"/>
                    <span>Add Product</span>
                    </Link>
                    </Button>
            </div>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Products</CardTitle>
                    <CardDescription>Manage your Products and view their performence.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    Image
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-end">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                <TableCell>
                                    <Image alt="Product Image" src={item.images[0]} height={64} width={64} className="rounded-lg size-16" />
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>₹{item.price}</TableCell>
                                <TableCell>{new Intl.DateTimeFormat("en-us").format(item.createdAt)}</TableCell>
                                <TableCell className="text-end">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <MoreHorizontalIcon className="size-4"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            <DropdownMenuLabel>
                                                Actions
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <Link href={`/dashboard/products/${item.id}`}>
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild> 
                                                <Link href={`/dashboard/products/${item.id}/delete`}>
                                                Delete
                                                </Link>
                                                </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}
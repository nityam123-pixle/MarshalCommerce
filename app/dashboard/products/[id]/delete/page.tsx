import { deleteProduct } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function DeleteRoute({params}: {params: {id: string}}) {
    return (
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-500">Are you absolutely sure?</CardTitle>
                    <CardDescription>This action cannot be undone. This will permanently delete this product and remove all data from our servers.</CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href="/dashboard/products">Cancle</Link>
                    </Button>
                    <form action={deleteProduct}>
                        <Input className="hidden" name="productId" value={params.id} />
                    <SubmitButton text="Continue" variant="destructive" />
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}
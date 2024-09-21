import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
  import { Avatar } from "@/components/ui/avatar";
import prisma from "@/app/lib/db";

  async function getData() {
    const data = await prisma.order.findMany({
      select: {
        amount: true,
        id: true,
        User: {
          select: {
            firstName: true,
            profileImage: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 7,
    })
  
    return data
  }

export async function RecentSales() {
    const data = await getData()
    return (
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-medium">
              Recent Orders
            </CardTitle>
            <CardContent className="flex flex-col gap-8">
              {data.map((item)=> (
                <div key={item.id} className="flex items-center gap-4">
                <Avatar className="hidden sm:flex w-9 h-9">
                    <AvatarImage src={item.User?.profileImage} alt="User Profile" />
                  <AvatarFallback>{item.User?.firstName.slice(0, 3)}</AvatarFallback>
                </Avatar>
                <div className="grip gap-1">
                    <p className="text-sm font-medium">{item.User?.firstName}</p>
                    <p className="text-sm text-muted-foreground">{item.User?.email}</p>
                </div>
                <p className="tracking-tighter ml-auto font-medium">₹{new Intl.NumberFormat('en-IN').format(item.amount / 100)}</p>
              </div>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
    )
}
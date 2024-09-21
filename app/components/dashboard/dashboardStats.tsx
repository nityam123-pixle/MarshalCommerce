import prisma from "@/app/lib/db";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    IndianRupeeIcon,
    PartyPopperIcon,
    ShoppingBagIcon,
    User2Icon,
  } from "lucide-react";


  async function getData() {

    const [user, products, order] = await Promise.all([
        prisma.user.findMany({
            select: {
                id: true
            }
        }),
        prisma.product.findMany({
            select: {
                id: true
            }
        }),
        prisma.order.findMany({
            select: {
                amount: true
            }
        })
    ])


    return {
        user, products, order
    };
  }

export async function DashboardStats() {
    const { user, products, order } = await getData()

    const totalAmount = order.reduce((accumalator, currentValue)=> {
        return accumalator + currentValue.amount;
    }, 0)
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl font-medium">
              Total Revenue
            </CardTitle>
            <IndianRupeeIcon className="size-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹ {new Intl.NumberFormat('en-IN').format(totalAmount / 100)}</p>
            {/* <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl font-medium">Total Sales</CardTitle>
            <ShoppingBagIcon className="size-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+{order.length}</p>
            <p className="text-xs text-muted-foreground">
              Total Sales on SoleSales
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl font-medium">
              Total Products
            </CardTitle>
            <PartyPopperIcon className="size-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{products.length}</p>
            <p className="text-xs text-muted-foreground">
              Total products Added
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl font-medium">Total Users</CardTitle>
            <User2Icon className="size-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{user.length}</p>
            <p className="text-xs text-muted-foreground">
              Total User Signed Up
            </p>
          </CardContent>
        </Card>
      </div>
    )
}
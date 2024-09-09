import { Metadata } from "next"

import { getCustomer, listCustomerOrders } from "@lib/data"
import Overview from "@modules/account/components/overview"
import { notFound, redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
}

export default async function OverviewTemplate({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }; }) {
  const redirectToAfterLogin = searchParams?.redirectToAfterLogin ?? undefined;

  if (redirectToAfterLogin) {
    return redirect(`/${redirectToAfterLogin}`)
  }

  const customer = await getCustomer().catch(() => null)
  const orders = (await listCustomerOrders().catch(() => null)) || null

  if (!customer) {
    notFound()
  }

  return <Overview customer={customer} orders={orders} />
}

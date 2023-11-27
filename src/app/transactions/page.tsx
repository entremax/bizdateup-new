import { apiUri } from '@/lib/utils'
import { cookies } from 'next/headers'
import { IInvestmentItem } from '@/types'
import Transaction from '@/app/transactions/transaction'

const getTransactions = async () => {
  const cookie = cookies()
  const token = cookie.get('token')?.value ?? ''
  const userId = cookie.get('user_id')?.value ?? ''

  const response: {
    data: { code: number | string; data: IInvestmentItem[] }
  } = await fetch(
    `${apiUri().v0}/investment/investmentbyinvestor?investor=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error)
      return error.message
    })

  if (response?.data?.code !== 200) {
    return new Error('Something went wrong!')
  }

  return { transactions: response.data.data }
}

export default async function TransactionsPage() {
  const data = await getTransactions()

  if ('Error' in data) {
    return <>Something went wrong</>
  }

  return (
    <main className="w-full pt-28 lg:pt-32">
      <div className="flex flex-col gap-4 px-4 md:px-12 lg:px-32">
        <h2 className="text-3xl">Transactions</h2>
        <div className="flex flex-col gap-3 py-2">
          {'transactions' in data &&
            data.transactions.map((transaction) => (
              <Transaction key={transaction._id} transaction={transaction} />
            ))}
        </div>
      </div>
    </main>
  )
}

import { topDealUsers } from "@/app/menuData"

function TopBox() {
  return (
    <div className='topBox '>
      <h1 className=" mb-5">Top Referrals</h1>
      <div className="list">
        {topDealUsers.map((user)=> (
            <div className="flex align-middle justify-between mb-8" key={user.id}>
                <div className="flex gap-4">
                    <img className=" w-10 h-10 object-cover rounded-full" src={user.img} alt=""/>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium">{user.username}</span>
                        <span className=" text-xs">{user.email}</span>
                    </div>
                </div>
                <span className=" font-medium">${user.amount}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox

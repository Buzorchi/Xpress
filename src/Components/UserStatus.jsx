
export const UserStatus = ({status}) => {
    return (
        <>
            {
                status === "Active" && 
                    <div className="px-3 py-3" >
                        <span className="text-[#27A713] bg-[#27A7131A] px-1 py-2 rounded-lg ">{status}</span>
                    </div>
            }
            {
                status === "Awaiting Approval" &&
                    <div className="px-3 py-3" >
                        <span className="text-[#FF9900] bg-[#FF99001A] px-1 py-2 rounded-lg ">{status}</span>
                    </div>
            }
            {
                status === "Deactivated" && 
                    <div className="px-3 py-3" >
                        <span className="text-[#FF0000] bg-[#FF00001A] px-1 py-2 rounded-lg ">{status}</span>
                    </div>
            }

        </>
    )

}
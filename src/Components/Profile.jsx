

export default function Profile() {
    const nams = [];
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        name.split(" ").forEach(
            word => {
                nams.push(word)
                console.log(word)
            }
        )
    }
    let email = "";
    if (localStorage.getItem("email")) {
        email = localStorage.getItem("email");
    }
    let password = ''
    if (localStorage.getItem("password")) {
        password = localStorage.getItem("password");
    }
    return (
        <div className="grid gap-4 shadow-md p-5 md:p-10">
            <h2 className="text-red-600 font-medium">Edit Your Profile</h2>
            <div className="space-y-2">
                <div className="grid md: grid-cols-2 gap-5">
                    <div className="grid gap-1">
                        <p className="text-sm">First Name</p>
                        <input type="text" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" value={nams[0]} />
                    </div>
                    <div className="grid gap-1">
                        <p className="text-sm">Last Name</p>
                        <input type="text" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" value={nams.length > 1 ? nams[nams.length - 1] : null} placeholder={nams.length > 1 ? null: "Last Name"} />
                    </div>
                </div>
                <div className="grid md: grid-cols-2 gap-5">
                    <div className="grid gap-1">
                        <p className="text-sm">Email</p>
                        <input type="email" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" value={email}/>
                    </div>
                    <div className="grid gap-1">
                        <p className="text-sm">Address</p>
                        <input type="text" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" placeholder="Kingston, 5236, United State" />
                    </div>
                </div>
                <div className="grid gap-1">
                    <p className="text-sm">Password Changes</p>
                    <input type="text" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" placeholder="Current Password" />
                    <input type="text" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" placeholder="New Password" />
                    <input type="text" className="border-0 bg-zinc-100 rounded-md px-2 text-xs" placeholder="Confirm New Password" />
                </div>
            </div>
            <div className="flex gap-2 items-center justify-end">
                <button className="px-5">Cancel</button>
                <button className="bg-red-600 text-white py-2 px-10 rounded-md">Save Changes</button>
            </div>
        </div>
    )
}
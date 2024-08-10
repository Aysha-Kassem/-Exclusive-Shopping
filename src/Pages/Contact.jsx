
// ICON
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
//react router dom
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20 space-y-10">
            <div className="text-xs flex items-center gap-2">
                <Link to="/" className="text-zinc-500">Home</Link>
                <span>/</span>
                <span>Contact</span>
            </div>
            <div className="space-y-10 md:space-y-0 md:flex md:gap-5 md:items-center">
                <div className="rounded-md shadow-md py-3 md:w-5/12 text-xs">
                    <div className="space-y-3 m-5 p-5 border-b">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-600 text-white p-2 rounded-full">
                                <BsTelephone />
                            </div>
                            <h1 className="text-sm  font-medium">Call To Us</h1>
                        </div>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>

                    </div>
                    <div className="space-y-3 m-5 p-5">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-600 text-white p-2 rounded-full">
                                <MdOutlineMailOutline />
                            </div>
                            <h1 className="text-sm  font-medium">Write To US</h1>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className="p-10 shadow-md space-y-5">
                    <div className="grid w-full gap-2 md:gap-5">
                        <div className="grid md:grid-cols-3 w-full gap-2">
                            <input className="bg-slate-100 border-0 " type="text" placeholder="Your Name" />

                            <input className="bg-slate-100 border-0 " type="email" placeholder="Your Email" />

                            <input className="bg-slate-100 border-0 " type="tel" placeholder="Your Phone" />

                        </div>
                        <textarea className="bg-slate-100 border-0 " placeholder="Your Message" rows="6" />
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button className="bg-red-600 text-white py-2 px-10 rounded-md ">Send Massage</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
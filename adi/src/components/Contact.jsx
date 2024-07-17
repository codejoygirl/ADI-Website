


const Contact = () => {
    return (
        <div>
            <form className="w-1/2 mx-auto mt-4 mb-4 bg-amber-950 rounded-lg p-4">
                <h1>Book Now</h1>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">First Name</label>
                    <input type="text" id="firstname" className="bg-white border border-[#854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5" placeholder="First Name" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">Last Name</label>
                    <input type="text" id="lastname" className="bg-white border border-[#854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5  " placeholder="Last Name" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-white border border-[#854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5" placeholder="email" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">Address</label>
                    <input type="text" id="address" className="bg-white border border-[854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5" placeholder="Address" required />
                </div>
                <div className="mb-2">
                    <button className="bg-[#854d0e] hover:bg-[#422006] text-white font-bold py-2 px-4 rounded w-full">
                        Book An Appointment
                    </button>
                </div>
            </form>
        </div>


    );
};

export default Contact;
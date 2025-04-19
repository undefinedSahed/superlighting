import React from "react";

const MyAccount = () => (
    <div className="px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">My Account</h2>
        <hr />
        <div className="max-w-3xl mx-auto">
            <form action="" method="post">
                <div className="">
                    <label htmlFor="name" className="block py-4 text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full md:w-2/3 lg:w-1/2 bg-white p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="block py-4 text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full md:w-2/3 lg:w-1/2 bg-white p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="phone" className="block py-4 text-gray-700">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full md:w-2/3 lg:w-1/2 bg-white p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="">
                    <label htmlFor="password" className="block py-4 text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full md:w-2/3 lg:w-1/2 bg-white p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="confirm-password"
                        className="block py-4 text-gray-700"
                    >
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        className="w-full md:w-2/3 lg:w-1/2 bg-white p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="dob" className="block py-4 text-gray-700">
                        Date of Birth
                    </label>

                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="w-full md:w-2/3 lg:w-1/2 bg-white p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="py-4">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default MyAccount;

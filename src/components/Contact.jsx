import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d250f924-730b-499b-b961-9b9d128cfbbf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
    });
    if (res.success) {
      console.log("Success", res);
      alert(
        "Thank you for reaching out Aid for depression initiative, we have recieved your submission and will get back to you as soon as possible."
      );
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="w-1/2 mx-auto mt-4 mb-4 bg-amber-950 rounded-lg p-4"
      >
        <h1>Book Now</h1>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="bg-white border border-[#854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="bg-white border border-[#854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5  "
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border border-[#854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5"
            placeholder="email"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="bg-white border border-[854d0e] text-[#854d0e] text-sm rounded-lg focus:ring-[#854d0e] focus:border-[#854d0e] block w-full p-2.5"
            placeholder="Address"
            required
          />
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

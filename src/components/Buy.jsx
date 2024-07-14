import { ethers } from "ethers";
import React, { useState } from "react";

const Buy = ({ state }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { contract } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setName("");
    setMessage("");

    const amount = {
      value: ethers.parseEther("0.001"),
    };
    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();

    console.log("transaction is done");
  };
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-start">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 w-[650px]">
            <label htmlFor="name" className="text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="eg. name"
              className="bg-black  outline-1 border border-gray-700 py-2 pl-2 pr-16 rounded-md placeholder:text-xs placeholder:text-left placeholder:text-gray-600 text-sm"
            />

            <label htmlFor="name" className="text-base">
              Message
            </label>
            <textarea
              rows={5}
              cols={7}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              id="Message"
              placeholder="enter your message"
              className="bg-black outline-1 border border-gray-700 py-2 pl-2 pr-16 rounded-md placeholder:text-xs placeholder:text-left placeholder:text-gray-600 text-sm"
            />

            <button
              type="submit"
              className="border rounded-lg px- py-2 text-xs border-gray-300"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Buy;

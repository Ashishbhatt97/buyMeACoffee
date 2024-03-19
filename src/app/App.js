"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";


export default function App() {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState();

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Please install MetaMask!");
                return;
            }
            const provider = new ethers.BrowserProvider(ethereum);
            console.log(provider);

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
            console.log("Connected", accounts[0]);

            const balance = await provider.getBalance("ethers.eth");

            // console.log(balance)
            // setBalance(balance);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        connectWallet();
    }, []);

    return <div className="flex items-center text-left justify-center flex-col w-full h-[100vh]">

        <h2 className="text-left">
            Account Address : {account}</h2>
        <h2 className="text-left">
            Balance Address : {balance}
        </h2>

    </div>;
}

"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../contracts/CoffeeShop.json"
import Buy from "@/components/Buy";
import Memos from "@/components/Memos";

export default function page() {

    const contractAbi = abi.abi;

    const [account, setAccount] = useState("");

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null
    })

    const contractAddress = "0xb98e5becf74c55f1458f9ca758c8aea11a6c26e1"


    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Please install MetaMask!");
                return;
            }

            const provider = new ethers.BrowserProvider(ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);

            setState({
                provider, signer, contract
            })

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            setAccount(accounts[0]);
            console.log("Connected", accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        connectWallet();
    }, []);

    return <div className="flex items-center justify-center p-4 flex-col w-full h-full">
        <div className="w-full flex">

            <div className="text-right">Wallet Connected : <span className="text-yellow-300">{account}</span> </div>
        </div>
        <Buy state={state} />
        <Memos state={state} />
    </div>;
}

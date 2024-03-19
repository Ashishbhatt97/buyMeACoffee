import React, { useEffect, useState } from 'react'

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const memosState = async () => {
            try {
                const memos = await contract.getMemos();
                if (memos) {
                    setMemos(memos);
                } else {
                    setMemos([])
                }
            } catch (error) {
                console.log(error)
            }
        }
        memosState();
    })

    return (
        <>
            {memos.length > 0 &&
                <div >
                    <table>
                        <thead className='border mt-5'>
                            <tr className='border'>
                                <th className='border border-gray-700 px-6 py-3'>S. no.</th>
                                <th className='border border-gray-700 px-6 py-3'>Name</th>
                                <th className='border  border-gray-700 px-6 py-3'>Message</th>
                                <th className='border  border-gray-700 px-6 py-3'>From</th>
                                <th className='border  border-gray-700 px-6 py-3'>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memos.map((mem, index) => (
                                <tr key={mem.timestamp}>
                                    <td className='border border-gray-700 px-6 text-sm  py-3 text-center'>{index + 1}</td>
                                    <td className='border border-gray-700 px-6  text-sm py-3'>{mem.name}</td>
                                    <td className='border border-gray-700 px-6  text-sm py-3'>{mem.message}</td>
                                    <td className='border border-gray-700 px-6  text-sm py-3'>{mem.from}</td>
                                    <td className='border border-gray-700 px-6  text-sm py-3'>{String(mem.timestamp)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table >
                </div>}
        </>

    )
}

export default Memos
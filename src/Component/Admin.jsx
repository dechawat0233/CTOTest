import '../App.css'
import React, { useState } from 'react';
import { Search, Users, Armchair, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

function Admin({ users, seats, setSeats }) {
    const handleInputChange = (e) => {
        setSeats(e.target.value); // อัปเดตค่า seats ตามที่ผู้ใช้กรอก
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(seats) < 0) {
            alert('จำนวนที่นั่งไม่สามารถน้อยกว่าศูนย์ได้');
            return; 
        }

        if (seats < users.length) {
            alert("มีคนลงทะเบียนมากกว่าที่กำหนดไว้");
        } else {
            alert("อัพเดทสำเร็จ");
        }
    };
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [sortAscending, setSortAscending] = useState(true); 
    const [filterText, setFilterText] = useState(''); 

    const filteredUsers = users.filter(user =>
        user.Fname.toLowerCase().includes(filterText.toLowerCase()) ||
        user.Lname.toLowerCase().includes(filterText.toLowerCase()) ||
        user.phone.toLowerCase().includes(filterText.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortAscending) {
            return a.Fname.localeCompare(b.Fname);
        }
    });

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...sortedUsers].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });
    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="content flex">
                <section className="w-full sm:w-1/2 px-4 py-6 border border-gray-200 rounded-lg">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                        <Armchair className="h-5 w-5 text-blue-600 mr-2" />ที่นั่งเหลืออยู่</label>
                    <span className="text-lg text-blue-600">{seats - users.length} ที่นั่ง</span>
                </section>
                <section className="w-full sm:w-1/2 px-4 py-6 border border-gray-200 rounded-lg">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                        <Users className="h-5 w-5 text-green-600 mr-2" />
                        คนที่ลงทะเบียนทั้งหมด
                    </label>

                    <span className="text-lg text-green-600">{users.length} คน</span>
                </section>
            </div>
            <section className="content border border-gray-200 rounded-lg">
                <form className="flex" onSubmit={handleSubmit}>
                    <div className="w-full sm:w-1/4 px-2 py-2">
                        <label className="block text-gray-700 font-semibold mb-2 ">กำหนดจำนวนที่นั่ง</label>
                        <input
                            id="setSeats"
                            placeholder="กำหนดจำนวนที่นั่ง"
                            type="number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            value={seats}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full sm:w-auto px-2 py-2 flex justify-start mt-4">
                        <button type="submit" className="bg-[#D0DF51] text-black px-4 py-2 rounded-lg h-11 mt-auto border border-gray-500">
                            บันทึก
                        </button>

                    </div>
                </form>
            </section>
            <section className="content border border-gray-200 rounded-lg">
                <div className="flex justify-between items-end">
                    <div className="w-full px-2 py-2">
                        <label className="block text-gray-700 font-semibold mb-2">ค้นหา</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="ค้นหา"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

            </section>
            <section className="content border border-gray-200 rounded-lg px-3 py-3">
                <div className="overflow-x-auto">

                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th
                                    className="px-4 py-2 border border-gray-300 text-left cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                                    onClick={() => handleSort('Fname')}
                                >
                                    <span className="flex items-center">
                                        ชื่อ
                                        <span className="ml-2">
                                            {sortConfig.key === 'Fname' ? (sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : <ArrowUpDown size={14} />}
                                        </span>
                                    </span>
                                </th>
                                <th
                                    className="px-4 py-2 border border-gray-300 text-left cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                                    onClick={() => handleSort('Lname')}
                                >
                                    <span className="flex items-center">
                                        นามสกุล
                                        <span className="ml-2">
                                            {sortConfig.key === 'Lname' ? (sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : <ArrowUpDown size={14} />}
                                        </span>
                                    </span>
                                </th>
                                <th
                                    className="px-4 py-2 border border-gray-300 text-left cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                                    onClick={() => handleSort('phone')}
                                >
                                    <span className="flex items-center">
                                        เบอร์โทร
                                        <span className="ml-2">
                                            {sortConfig.key === 'phone' ? (sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : <ArrowUpDown size={14} />}
                                        </span>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((user, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border border-gray-300">{user.Fname}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.Lname}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    )
}

export default Admin
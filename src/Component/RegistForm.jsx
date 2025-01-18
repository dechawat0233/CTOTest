import '../App.css'
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';

function RegistForm() {
    const { users, setUsers, seats } = useAppContext();

    const [formData, setFormData] = useState({
        Fname: '',
        Lname: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.length < seats) {
            setUsers([
                ...users,
                {
                    Fname: formData.Fname,
                    Lname: formData.Lname,
                    phone: formData.phone,
                },
            ]);
            setFormData({
                Fname: '',
                Lname: '',
                phone: '',
            });
        } else {
            alert('ที่นั่งเต็มแล้ว');
        }
    };

    return (
        <div>
            <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
                <div className="w-full sm:w-1/4 px-2 py-2">
                    <label className="block text-gray-700 font-semibold mb-2">ชื่อ</label>
                    <input id="Fname" placeholder="ชื่อ" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={formData.Fname}
                        onChange={handleInputChange} required />
                </div>
                <div className="w-full sm:w-1/4 px-2 py-2">
                    <label className="block text-gray-700 font-semibold mb-2">นามสกุล</label>
                    <input id="Lname" placeholder="นามสกุล" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={formData.Lname}
                        onChange={handleInputChange} required />
                </div>
                <div className="w-full sm:w-1/4 px-2 py-2">
                    <label className="block text-gray-700 font-semibold mb-2">เบอร์โทร</label>
                    <input id="phone" placeholder="เบอร์โทร" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={formData.phone}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        maxLength="10"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, "");
                        }}
                        onChange={handleInputChange} required />
                </div>
                <div className="w-full sm:w-auto px-2 py-2 flex justify-start mt-4">
                    <button type="submit" className="bg-[#D0DF51] text-black px-4 py-2 rounded-lg h-11 mt-auto border border-gray-500">
                        ลงชื่อ
                    </button>
                </div>
            </form>
        </div>


    )
}

export default RegistForm
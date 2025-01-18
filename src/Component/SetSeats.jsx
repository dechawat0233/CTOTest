import '../App.css'
import { useAppContext } from '../AppContext';

function SetSeats() {
    const { users, seats, setSeats } = useAppContext();

    const handleInputChange = (e) => {
        setSeats(e.target.value);
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
            alert("บันทึกสำเร็จ");
        }
    };
    return (
        <div>
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
        </div>
    )
}

export default SetSeats
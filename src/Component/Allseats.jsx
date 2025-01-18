import '../App.css'
import { Users} from 'lucide-react';
import { useAppContext } from '../AppContext';

function AllSeats() {
    const { users } = useAppContext();

    return (
        <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                <Users className="h-5 w-5 text-green-600 mr-2" />
                คนที่ลงทะเบียนทั้งหมด
            </label>
            <span className="text-lg text-green-600">{users.length} คน</span>
        </div>
    )
}

export default AllSeats
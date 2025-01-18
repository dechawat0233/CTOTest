import '../App.css'
import {Armchair} from 'lucide-react';
import { useAppContext } from '../AppContext';

function SeatRemain() {
    const { users, seats } = useAppContext();

    return (
        <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                    <Armchair className="h-5 w-5 text-blue-600 mr-2" />ที่นั่งเหลืออยู่</label>
                <span className="text-lg text-blue-600">{seats - users.length} ที่นั่ง</span>
        </div>
    )
}

export default SeatRemain
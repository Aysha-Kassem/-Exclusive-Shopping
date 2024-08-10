// react
import { useState, useEffect } from "react"

export default function Timer({ targetDate }) {
    const calcluteeTimeLeft = () => {
        const currentTime = new Date();
        const difference = targetDate - currentTime;
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            }
        }
        return timeLeft;
    }
    const [time, setTime] = useState(calcluteeTimeLeft());
    // update timer every second
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calcluteeTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    return (
        <div className="flex gap-10 items-center">
            <div className="flex items-center gap-2">
                {/* timer */}
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[10px]">Days</p>
                    <p className="font-bold">{time.days || 0}</p>
                </div>
                <p>:</p>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[10px]">Hours</p>
                    <p className="font-bold">{time.hours || 0}</p>
                </div>
                <p>:</p>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[10px]">Minutes</p>
                    <p className="font-bold">{time.minutes || 0}</p>
                </div>
                <p>:</p>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[10px]">Seconds</p>
                    <p className="font-bold">{time.seconds || 0}</p>
                </div>
            </div>
        </div>
    )
}
import { Text } from "react-font"

export default function Credits() {
    return (
        <div className="flex p-4 space-x-3">
            <Text family='Shadows Into Light' className="text-xl font-bold text-black tracking-widest">
                Designed and Inspired by 
            </Text >
            <a href="https://www.behance.net/mai_haggag"><Text family='Shadows Into Light' className="text-xl font-bold text-blue-500 tracking-widest">Mai Haggag</Text ></a>
        </div>
    )
}
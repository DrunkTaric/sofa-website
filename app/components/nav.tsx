import { Text } from "react-font"

export default function Nav() {
   return (
        <div className="w-full h-fit grid grid-cols-4">
            <Text family='Viga' className="text-lg ml-0 mr-auto font-extrabold text-black tracking-widest">SOFA</Text >
            <div className="grid grid-cols-5 col-span-2">
                <button className="text-md ml-0 mr-auto text-black font-semibold tracking-widest">Home</button >
                <button className="text-md ml-0 mr-auto text-gray-400 font-semibold tracking-widest">Shop</button >
                <button className="text-md ml-0 mr-auto text-gray-400 font-semibold tracking-widest">Offers</button >
                <button className="text-md ml-0 mr-auto text-gray-400 font-semibold tracking-widest">About</button >
                <button className="text-md ml-0 mr-auto text-gray-400 font-semibold tracking-widest">Contact Us</button >
            </div>
        </div>
    );
}
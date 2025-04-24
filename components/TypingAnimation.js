import dynamic from "next/dynamic";

const Typing = dynamic(() => import("./Typing"), { ssr: false });

export default Typing;

import "./style.css";
interface btnProps{
    content: string;
}
export default function BtnColor({content} : btnProps) {
    return (
        <button className="btnColor">
            {content}
        </button>
    )
}

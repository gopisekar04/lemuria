export const PrimaryButton = ({onClick, label}) => {
    return <button onClick={onClick} className="bg-[#6A64A2] text-white p-3 rounded mt-5 w-40 cursor-pointer">{label}</button>
}
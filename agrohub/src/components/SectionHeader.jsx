function SectionHeader(props) {
    return (
        <div className="pl-12">
             <h3 className="text-2xl font-bold">{props.text}</h3>
                <hr className="border-[2px] border-green-800 mr-12"/>
        </div>
    )
}
export default SectionHeader
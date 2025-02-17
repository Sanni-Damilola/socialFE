import Postfile from "./Postfile"

const DesktopStart = () => {
    return (
        <div className="w-[62%] h-[100%] pt-[40px] border-r border-[#DBDBDB] bg-[#fff] ml-[245px]">

            <div className="w-[100%] h-[120px] column border-b border-[#DBDBDB] sticky">
                <h3 className="text-[21px] ml-[20px]">Home</h3>
                <div className="w-[100%] flex justify-around mt-[45px]">
                    <h4 className="pb-[15px] border-b-[3px] border-[blue]">For you</h4>
                    <h4>Following</h4>
                </div>
            </div>

               <Postfile />
        </div>
    )
}

export default DesktopStart
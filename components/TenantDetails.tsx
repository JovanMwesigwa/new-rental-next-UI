import Image from "next/image";
import { AnalysisProps, UserProps } from "../types";

interface Props {
    selectedUser: UserProps | any;
}

const TenantDetails: React.FC<Props> = ({ selectedUser }) => {

    // console.log("DEBUG HERE =============", selectedUser.analysis)
    return (
        <div className="bg-white p-6 flex flex-col flex-1 ml-2 rounded-md">
            <div className="flex w-full h-56  flex-row">
                <div className="flex flex-1 bg-gray-300 rounded-md relative overflow-hidden">
                    <Image src={selectedUser.picture} alt="user picture" layout='fill' />
                </div>
                <div className="flex flex-1 px-8  flex-col">
                    <h1 className="text-lg font-semibold">{selectedUser.name}</h1>
                    <div className="flex flex-row">
                        <h1 className="text-base font-semibold text-gray-400">ROOM NO: </h1>
                        <h1 className="text-base ml-3 font-semibold">{selectedUser.room}</h1>
                    </div>
                    <div className="flex flex-row">
                        <h1 className="text-base font-semibold text-gray-400">ENTERED: {selectedUser.entered}</h1>
                        <h1 className="text-base ml-3 font-semibold">22/10/22</h1>
                    </div>
                    <div className="flex flex-row">
                        <h1 className="text-base font-semibold text-gray-400">PROFESSION: {selectedUser.profession}</h1>
                        <h1 className="text-base ml-3 font-semibold">TEACHER</h1>
                    </div>
                </div>
            </div>

            <table>
                <tr className="flex flex-row items-center justify-between mt-8 text-gray-500 text-sm  ">
                    <th className="flex flex-1 font-normal" >MONTH</th>
                    <th className="flex flex-1 font-normal">BILL</th>
                    <th className="flex flex-1 font-normal">COVERED %</th>
                    <th className="flex flex-1 font-normal">AMOUNT</th>
                    <th className="flex flex-1 font-normal">BALANCE</th>
                </tr>

                {
                    selectedUser.analysis.map((item: AnalysisProps) => (
                        <tr key={item.id}>
                            <td className="flex flex-row  h-32 items-center justify-between">
                                <div className="flex flex-1 ">
                                    <div className={`w-20 h-20 border-4 ${item.percentage >= 100 ? "border-red-600" : "border-green-600"} rounded-full flex flex-col items-center justify-center`}>
                                        <h1 className="font-semibold">{item.percentage}</h1>
                                        <p className="text-gray-400 text-sm">{item.month}</p>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="flex flex-1 flex-col">
                                {
                                    item.bills.map((billName: any) => (
                                        <h1 key={billName.id} className="font-semibold text-sm">{billName.name}</h1>
                                    ))
                                }
                                </div>
                                <div className="flex flex-1 flex-col ">
                                    {
                                        item.bills.map((billName: any) => (
                                            <h1 key={billName.id} className="font-semibold text-sm">{billName.covered} %</h1>
                                        ))
                                    }
                                </div>
                                <div className="flex flex-1 flex-col ">
                                    {
                                        item.bills.map((billName: any) => (
                                            <h1 key={billName.id} className="font-semibold text-sm">{billName.amountPaid}</h1>
                                        ))
                                    }
                                </div>
                                <div className="flex flex-1 flex-col ">
                                    {
                                        item.bills.map((billName: any) => (
                                            <h1 key={billName.id} className="font-semibold text-sm">{billName.balance}</h1>
                                        ))
                                    }
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
};

export default TenantDetails;
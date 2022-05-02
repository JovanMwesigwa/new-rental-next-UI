
export interface UserProps {
    id: number | string;
    name: string;
    profession: string;
    entered: string;
    room: number | string;
    nin: string | null;
    permit: string | null;
    picture: string;
    analysis: any;
}

interface Bills {
    id: number | string;
    name: string;
    covered: number;
    amountPaid: number;
    balance: number
}

export interface AnalysisProps {
    id: number | string;
    month: string;
    percentage: number;
    bills: any
    
}
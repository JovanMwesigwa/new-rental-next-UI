import { FaMoneyBillWave, FaHandHoldingWater } from 'react-icons/fa';
import { ImStatsBars2, ImPowerCord } from 'react-icons/im'
import { BsTrashFill } from 'react-icons/bs'
import CardItem from './CardItem';


interface Props {
    activeCard: string | null;
    activateCard: (name: string) => void;
}

const CardComponent: React.FC<Props> = ({ activeCard, activateCard }) => {
    return (
        <div  className="flex flex-row my-4 items-center justify-between ">

            <CardItem 
                name="revenue"
                IconName={ImStatsBars2} 
                activateCard={activateCard} 
                activeCard={activeCard} 
                title="UGX 4,555,456"
                subTitle="Total Revenue"
            />

            <CardItem 
                name="water"
                IconName={FaHandHoldingWater} 
                activateCard={activateCard} 
                activeCard={activeCard} 
                title="8 Pending"
                subTitle="NWSC Billing"
            />

            <CardItem 
                name="rent"
                IconName={FaMoneyBillWave} 
                activateCard={activateCard} 
                activeCard={activeCard} 
                title="7 Pending"
                subTitle="Rent charges"
            />
            
            <CardItem 
                name="power"
                IconName={ImPowerCord} 
                activateCard={activateCard} 
                activeCard={activeCard} 
                title="2 Pending"
                subTitle="Power charges"
            />
            
            <CardItem 
                name="garbage"
                IconName={BsTrashFill} 
                activateCard={activateCard} 
                activeCard={activeCard} 
                title="1 Pending"
                subTitle="collection charges"
            />

        </div>
    )
};

export default CardComponent;
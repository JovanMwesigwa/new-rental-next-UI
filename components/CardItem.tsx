interface Props {
  name: string;
  activateCard: (name: string) => void;
  activeCard: string | null;
  IconName: any;
  title: string;
  subTitle: string;
}

const CardItem: React.FC<Props> = ({
  activateCard,
  activeCard,
  IconName,
  title,
  subTitle,
  name,
}) => {
  return (
    <div
      className={`h-40 w-56 p-4 flex ${
        activeCard === name ? "bg-black text-white" : "bg-[#c3c1c1] text-black"
      } rounded-md cursor-pointer`}
      onClick={() => activateCard(name)}
    >
      <div className="p-5 flex flex-1 flex-col justify-evenly">
        <IconName size={45} />
        <h1 className="font-semibold">{title}</h1>
        <h3 className="text-xs">{subTitle}</h3>
      </div>
    </div>
  );
};

export default CardItem;

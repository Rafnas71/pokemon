import CardInfo from "../../components/Cardinfo";
import Cards from "../../components/Cards";
import "../index.css"

export default function Homepage() {
  return (
    <div className="flex">
      <div className=" flex-auto max-w-sm w-2/3 overflow-none">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="">
        <CardInfo/>
      </div>
    </div>
  );
}

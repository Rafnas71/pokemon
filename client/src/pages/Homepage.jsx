import CardInfo from "../components/Cardinfo";
import Cards from "../components/Cards";
import "../index.css"

export default function Homepage() {
  return (
    <div >
      <div className="flex flex-wrap gap-1 m-2">
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
      <div className="flex">
        <CardInfo/>
      </div>
    </div>
  );
}

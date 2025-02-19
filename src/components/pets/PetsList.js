import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams } from 'react-router-dom'
import CatsDogs from './CatsDogs'

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const params = useParams()

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {params.kind === "cats" ? 
        cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        )) : null}

        {params.kind === "dogs" ? dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        )) : null}

        {params.kind ? null : <CatsDogs dogs={dogs} cats={cats}/>}

        {/* All cats section */}
        {/* {}
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))} */}

        {/* All dogs section */}
        {/* {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))} */}
      </section>
    </section>
  );
};

export default PetsList;

import Card from '../Card/Card';

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
      <div>
         <ul>{characters.map((item)=>(
               <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                  origin={item.origin.name}
                  image={item.image}
                  onClose={onClose}
               />
            ))}
         </ul>
      </div>
   );
}

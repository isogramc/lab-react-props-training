import "./App.css";
import "./components/IdCard";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColour from "./components/BoxColour";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

const students = [{lastName:'Doe',  firstName:'John',  gender:'male',  height: 178, birth: "1992-07-14", picture:"https://randomuser.me/api/portraits/men/44.jpg"},
  {lastName:'Delores',  firstName:'Obrien',  gender:'female',  height: 172, birth: "1988-05-11", picture:"https://randomuser.me/api/portraits/women/44.jpg"}]
const creditCards = [
  {type:"Visa",
    number:"0123456789018845",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white" }, {
      type:"Master Card",
  number:"0123456789010995",
  expirationMonth:3,
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222",
    }, {
      type:"Visa",
  number:"0123456789016984",
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white",
    }
];
const driverCards =  [
  {name:"Travis Kalanick",
    rating:4.2,
    img:"https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  }, {
    name:"Dara Khosrowshahi",
    rating:4.9,
    img:"https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  } 
] 

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Student ID Cards</h2>
        {students.map((student, index) => (
          <IdCard key={index}
                  lastName={student.lastName}  
                  firstName={student.firstName}  
                  gender={student.gender}  
                  height={student.height} 
                  birth={student.birth} 
                  picture={student.picture}/>
        ))}

        <h2>Greetings</h2>

        <Greetings lang="de" text="Ludwig">Ludwig</Greetings>
        <Greetings lang="fr" text="Francois">François</Greetings>

        <h2>Random Number</h2>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h2>Box of Colour</h2>

        <BoxColour r={255} g={0} b={0} />
        <BoxColour r={128} g={255} b={0} />

        <h2>Credit Card</h2>

        <div style={{display: "inline-flex"}}>
        {creditCards.map((card, index)=>(
          <CreditCard
            key={index}
            type={card.type}
            number={card.number}
            expirationMonth={card.expirationMonth}
            expirationYear={card.expirationYear}
            bank={card.bank}
            owner={card.owner}
            bgColor={card.bgColor}
            color={card.color} 
          />))}
        </div>

       <h2>Rating</h2>
       <Rating>0</Rating>
       <Rating>1.49</Rating>
       <Rating>1.5</Rating>
       <Rating>3</Rating>
       <Rating>4</Rating>
       <Rating>5</Rating>

       <h2>Driver Card</h2> 
          {driverCards.map((driver, index)=>(
             <DriverCard
              key={index}
              name={driver.name}
              rating={driver.rating}
              img={driver.img}
              carModel={driver.car.model}
              carLicensePlate={driver.car.licensePlate}
             />
          ))}
    </div>
  );
}

export default App;

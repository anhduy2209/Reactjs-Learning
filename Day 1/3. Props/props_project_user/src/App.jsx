const App = () => {
  return <User
    img="https://avatars.githubusercontent.com/u/66456580?v=4"
    name="Anh Duy"
    age={24}
    isMarried={false}
    hobbies={
      ['Coding',
        'Cooking',
        'Games'
      ]
    } />;
}

// const User = (props) => {
//   return <section>
//     <img src={props.img} alt={props.name} />
//     <h1>Name: {props.name}</h1>
//     <h2>Age: {props.age}</h2>
//     <h3>Is married: {props.isMarried}</h3>
//     <h4>Hobbies: {props.hobbies}</h4>
//   </section>
// } cách 1
const User = ({ img, name, age, isMarried, hobbies }) => {
  return <section>
    <img src={img} alt={name} />
    <h1>Name: {name}</h1>
    <h2>Age: {age}</h2>
    <h3>Is married: {isMarried ? "Yes" : "No"}</h3>
    <h4>Hobbies: {hobbies}</h4>
  </section>
}
export default App

// // import Add from "./components/Add";
// // import Header from "./components/Header";
// // import Main from "./components/Main";
// // import Footer from "./components/Footer";
// // import Greet from "./components/Greet";
// import JSXRules from "./components/JSXRules";

// const App = () => {
//   // return <div>
//   //   <Header />
//   //   <Main />
//   //   <Footer />
//   // </div> //1

//   // return <section id="section">
//   //   <h1>My Website</h1>
//   //   <article>
//   //     <h2>Welcome to React</h2>
//   //     <p>Paragraph Content</p>
//   //   </article>
//   // </section> //2
//   return (
//     <div>
//       <JSXRules />
//     </div>
//   )
// }

// export default App; /1


// import React from 'react'

// const App = () => {
//   const myName = "Anh Duy";
//   const multiply = (a, b) => a * b;
//   const specialClass = 'mrDi';

//   return (
//     <section>
//       <p>2 + 2 = {2 + 2}</p>
//       <h1>{myName}</h1>
//       <p>My Friends List: {["kientrung", "thinh roze", "etc"]}</p>
//       <p>2 * 2 = {multiply(2, 10)}</p>
//       <p className={specialClass}>This is special class</p>
//     </section>
//   )
// }

// export default App /2

// import React from 'react'
// import Greeting from './components/Greeting'
// import ProductInfo from './components/ProductInfo'

// const App = () => {
//   return (
//     <div>
//       <Greeting />
//       <ProductInfo />
//     </div>
//   )
// }

// export default App /3

import React from 'react'

export const App = () => {
  const userInfo = [
    {
      "name": "Herman Johns",
      "phone": "(869) 245-6771",
      "email": "nunc@aol.org"
    },
    {
      "name": "Uta Jarvis",
      "phone": "(434) 273-5267",
      "email": "vel.faucibus@google.org"
    },
    {
      "name": "Murphy Hardy",
      "phone": "(116) 674-2467",
      "email": "sociosqu@protonmail.ca"
    },
    {
      "name": "Herrod Chavez",
      "phone": "(492) 348-2608",
      "email": "mi.duis.risus@outlook.org"
    },
    {
      "name": "Demetria Collier",
      "phone": "(635) 228-9303",
      "email": "at.lacus@protonmail.edu"
    }
  ];

  return (
    <main>
      {userInfo.map((user) => (
        <ul key={user}>
          <li>{user.name}</li>
          <li>{user.phone}</li>
          <li>{user.email}</li>
        </ul>
      ))}
    </main>
  //   <main>
  //   {userInfo.map(({ name, phone, email }) => (
  //     <ul key={Math.random()}>
  //       <li>{name}</li>
  //       <li>{phone}</li>
  //       <li>{email}</li>
  //     </ul>
  //   ))}
  // </main>  //Cách 2 dựa trên data có thể map mà không cần .
  )
}
export default App

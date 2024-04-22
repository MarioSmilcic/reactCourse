import "./App.css";
import { useState } from "react";
import TestState from "./TestState";
import Button from "./components/Button/Button";
import ProfileImg from "./assets/profile1.png";
import Profile from "./features/Profile/Profile";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Work from "./features/Work/Work";
import Posts from "./features/Posts/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Users from "./features/Users/Users";
// import "./User.css";
import PostById from "./features/Posts/components/PostById";
import Tasks from "./features/Tasks/Tasks";
import Clicks from "./features/Clicks/Clicks";
import Cart from "./features/Cart/Cart";
import Items from "./features/Items/Items";
import ItemsInCart from "./features/Items/components/ItemsInCart";
import Pocemons from "./features/Pocemons/Pocemons";
// import CartIcon from "./features/Items/components/CartIcon";
// import Paragraph from "./Paragraph";
// import Card from "./Card";

// const profileImg = <img src={ProfileImg} alt="Profile image" />;

const App = () => {
  // const [person, setPerson] = useState([
  //   {
  //     name: "Mario",
  //     age: 37,
  //     city: "Banja Luka",
  //     email: "mariosmilcic@gmail.com",
  //     imageUrl:
  //       "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.175313777.1710781203&semt=sph",
  //   },
  //   {
  //     name: "Micko",
  //     age: 25,
  //     city: "Banja Luka",
  //     email: "micko@gmail.com",
  //     imageUrl:
  //       "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.175313777.1710781203&semt=sph",
  //   },
  //   {
  //     name: "Jim",
  //     age: 27,
  //     city: "Banja Luka",
  //     email: "jim@gmail.com",
  //     imageUrl:
  //       "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
  //   },
  //   {
  //     name: "Vedran",
  //     age: 39,
  //     city: "Banja Luka",
  //     email: "vedra@gmail.com",
  //     imageUrl:
  //       "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.175313777.1710781203&semt=sph",
  //   },
  // ]);

  //
  // const [count, setCount] = useState(0);
  // const [testState, setTestState] = useState("test");
  // const text = "to je to";

  // const [show, setShow] = useState(false);

  // const buttonText = "Klikni";

  // const handleChangeText = () => {
  //   setShow(!show);
  // };

  // const handleIncrementOrDecrement = (operation) => {
  //   if (operation === "increment") {
  //     setCount(count + 1);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };
  // const handleIncrementOrDecrement = (operation) => {
  //   switch (operation) {
  //     case "increment":
  //       setCount(count + 1);
  //       break;
  //     case "decrement":
  //       setCount(count - 1);
  //       break;
  //   }
  // };

  // const handleSetCount = () => {
  //   setCount(count + 1);
  // };

  // const handleCountDecrement = () => {
  //   setCount(count - 1);
  // };

  // const handleTestChange = () => {
  //   setTestState("promijenjen test state");
  // };

  // const paragraphtText =
  //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nihil laborum qui vitae saepe non odio vero perferendis pariatur optio ex ut nisi culpa, voluptatum, doloribus quia a hic quasi.";

  // const buttonText = "Dodaj + 1 ";

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/page1" element={<h1>Page 1</h1>} /
          <Route path="/page2" element={<h1>Page 2</h1>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts/:postId" element={<PostById />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/clicks" element={<Clicks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items" element={<Items />} />
          <Route path="/orders" element={<ItemsInCart />} />
          <Route path="/pocemons" element={<Pocemons />} />
        </Routes>
      </BrowserRouter>
      {/* <p>Pozdrav Vite + React</p> */}
      {/* 
      <div className="persons">
        {person.map((profile) => (
          <Profile
            name={profile.name}
            age={profile.age}
            email={profile.email}
            city={profile.city}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div> */}
      {/* {show && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
          esse.
        </p>
      )} */}
      {/* <p>{count}</p> */}
      {/* <TestState testState={testState} /> */}
      {/* <Button
        color="green"
        buttonText={show ? "sakrij tekxt" : "prikazi tekst"}
        handleButtonClick={handleChangeText}
        // handleButtonClick={() => handleIncrementOrDecrement("increment")}
      /> */}
      {/* <Button
        color="green"
        buttonText="dodaj + 1"
        handleButtonClick={() => handleIncrementOrDecrement("increment")}
      />
      <Button
        color="red"
        buttonText="smanji - 1"
        handleButtonClick={() => handleIncrementOrDecrement("decrement")}
      /> */}
      {/* <p>Ovo je vrijednost varijable:{text}</p'>
      <Paragraph text="Lorem ipsum" />
      <Card paragraphText={paragraphtText} buttonText={buttonText} /> */}
    </>
  );
};
export default App;

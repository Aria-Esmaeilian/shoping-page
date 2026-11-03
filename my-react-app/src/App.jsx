import Conter from "./componets/Counter";
import Header from "./componets/Header";
import Text from "./componets/Text";
import Alert from "./componets/alert";
import Img from "./componets/img";
import Login from "./componets/login";
import Showname from "./componets/showName";

function App() {
  return (
    <div
      className="bg-pink-950 min-h-screen text-white p-6 word-spacing-[5px]
     flex flex-col items-center justify-center h-dvh"
    >
      <Header h1="Hi" h2="Aria" />
      <Conter />
      <Alert name="AAAria" type="s" />
      <Showname />
      <Login />
      <Text name="Aria" age={24} skills={["HTML", "CSS", "Js"]} />
      <Text name="ali" age={21} skills={["java", "c++", "react"]} />
      <Text name="sara" age={20} skills={["ph", "Cshrp", "Domjs"]} />
      <Img />
    </div>
  );
}

export default App;

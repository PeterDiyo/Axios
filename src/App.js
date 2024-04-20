import Title from "./components/Title";
import CustomInstance from "./examples/custom-instance";
import FirstRequest from "./examples/first-request";
import GlobalInstance from "./examples/global-instance";
import Headers from "./examples/headers";
import PostRequest from "./examples/post-request";
import "./axios/global";
import Interceptors from "./examples/interceptor";

function App() {
  return (
    <main>
      <Title />
      <FirstRequest />
      <hr />
      <Headers />
      <hr />
      <PostRequest />
      <hr />
      <GlobalInstance />
      <hr />
      <CustomInstance />
      <hr />
      <Interceptors />
    </main>
  );
}

export default App;

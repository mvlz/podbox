import "./App.css";
import { EmblaCarousel } from "./components/slider";
import useGetAllSliderQuery from "./hooks/useGetAllSliderQuery";

function App() {
  const [data] = useGetAllSliderQuery("https://boxapi.pod.ir/v3/home/slider");
  return (
    <div className="App">
      <EmblaCarousel sliders={data?.sliders} />
    </div>
  );
}

export default App;

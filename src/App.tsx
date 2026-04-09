import HeroText from "./components/HeroText";
import ImageStacks from "./components/ImageStacks";

const App = () => {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center py-32 infinite-board">
      <HeroText />
      {/* scattered anime cards */}
      <ImageStacks />
    </main>
  )
}

export default App
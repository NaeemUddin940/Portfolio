import Notification from "./components/Notification/Notification";
import GooeyNav from "./GooeyNav/GooeyNav";
import Routes from "./Router/appRoutes";

function App() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Sign In", href: "/signin" },
  ];
  return (
    <>
      <div style={{position: "relative" }}>
        <Notification />
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <Routes />
    </>
  );
}

export default App;

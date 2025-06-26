import ShinyText from "../../ShinyText/ShinyText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Notification() {
  return (
    <div className="bg-zinc-950 flex justify-center items-center gap-4">
      <ShinyText
        text="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
        disabled={false}
        speed={2}
        className="custom-class py-3 text-xl text-center"
      />
      <InteractiveHoverButton />
    </div>
  );
}

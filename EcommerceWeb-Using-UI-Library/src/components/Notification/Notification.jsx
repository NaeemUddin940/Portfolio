import ShinyText from "../../ShinyText/ShinyText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Notification() {
  return (
    <div className="bg-zinc-800 flex justify-center items-center gap-4 relative">
      <div className="flex jcenter items-center gap-4">
        <ShinyText
          text="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          disabled={false}
          speed={2}
          className="custom-class py-3 text-xl text-center"
        />
        <InteractiveHoverButton />
      </div>
      <div className=" absolute top-3 right-0 pr-10">
        <select
          className="text-white bg-transparent rounded-md p-1"
          name="language"
          id="language">
          <option className="text-black" value="English">
            English
          </option>
          <option className="text-black" value="Spanish">
            Spanish
          </option>
          <option className="text-black" value="French">
            French
          </option>
        </select>
      </div>
    </div>
  );
}

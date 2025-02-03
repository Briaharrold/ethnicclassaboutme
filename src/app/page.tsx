import { MainPageComponents } from "@/components/MainPageComponents";
import { ParagraphComponent } from "@/components/ParagraphComponent";
import { Luckiest_Guy } from "next/font/google";

// Define Luckiest Guy Font
const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

export default function HomeApp() {
  return (
    <main>
      <main className={luckiestGuy.className}>
      <ParagraphComponent/>
      </main>
      <MainPageComponents />
    </main>
  );
}

import LuvimesNavbar from "@/components/luvimes/Navbar";
import LuvimesFooter from "@/components/luvimes/Footer";

export const metadata = {
  title: "Luvimes — Technology Company",
  description: "We build digital products that solve real problems",
};

export default function LuvimesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LuvimesNavbar />
      <main className="pt-16">{children}</main>
      <LuvimesFooter />
    </>
  );
}

import Image from "next/image";
import Banner from "../../components/Banner";
import Login from "../../components/Login";
export default function Home() {
  return (
    <div>
      {/* banner */}
      <Banner />

      {/* login page */}
      <Login />
    </div>
  )
}
import Image from "next/image";
import Banner from "../../components/Banner";
import Login from "../../components/Login";
export default function Home() {
  const h = 100
  return (
    <div>
      {/* banner */}
      <Banner />

      {/* login page */}
      <Login />
    </div>
  )
}
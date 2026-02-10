import ContentContainer from "@/components/ContentContainer"
import Header from "@/components/Header"
import Tabs from "@/components/TabBar/Tabs"

const Home = () => {
  return (

    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 pb-32">

      <Header />

      <ContentContainer />

      <Tabs />

    </div>

  )
}

export default Home



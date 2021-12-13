import React from "react"
import Layout from "../components/themes/layout"
import SEO from "../components/organisms/seo"
import Banner from "../components/organisms/banner"
import BlogResume from "../components/organisms/blog-resume"
import WhoWeAre from "../components/organisms/who-we-are"
import Meetings from "../components/organisms/meetings"
import HelpUs from "../components/organisms/help-us"
import Contact from "../components/organisms/contact"
import Events from "../components/organisms/events"
import Location from "../components/organisms/location"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main id="inicio">
      <Banner />
      <WhoWeAre />
      <Meetings />
      {/* <Events /> */}
      <HelpUs />
      <Contact />
      <Location />
    </main>
  </Layout>
)

export default IndexPage

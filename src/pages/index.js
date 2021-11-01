import React from "react"
import Layout from "../components/themes/layout"
import SEO from "../components/organisms/seo"
import Banner from "../components/organisms/banner"
import Content from "../components/organisms/content"
import BlogResume from "../components/organisms/blog-resume"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Content>
      <main style={{textAlign: 'center'}}>
        <h2>Quem somos</h2>
        <p>
          A Igreja Batista Anunciar é uma instituição religiosa que oferece diferentes maneiras 
          de anunciar a palavra de Deus e de exercer seu papel social. Isso se dá por meio de cultos, reuniões de células, encontros, mídias sociais, missões, escola bíblica e cursos de capacitação;
          eventos para homens, mulheres, crianças 
          e idosos, zelando pelo atendimento e manutenção da família como princípio basilar da sociedade; prestação de assistência alimentar e à saúde da comunidade na distribuição de cestas básicas e nas parcerias com órgãos governamentais.
          Uma igreja apaixonada e apaixonante! Comprometida em gerar vidas para o Reino e discipulá-las segundo o caráter de Cristo!
        </p>
      </main>
      {/* <BlogResume /> */}
    </Content>
  </Layout>
)

export default IndexPage

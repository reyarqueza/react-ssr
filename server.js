import express from 'express'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Article from './jsx/Article.jsx'
import Card from './jsx/Card.jsx'
import Columns from './jsx/Columns.jsx'
import Content from './jsx/Content.jsx'
import Footer from './jsx/Footer.jsx'
import Header from './jsx/Header.jsx'
import Hero from './jsx/Hero.jsx'
import Nav from './jsx/Nav.jsx'

// server side
import wrapper from './wrapper'

const app = express()
const port = 3333

// pages
function home (req, res) {
  res.send(
    wrapper(
      ReactDOMServer.renderToString(
        <Article>
          <Header>
            <Nav
              list={[
                {label: 'Home', url: '/'},
                {label: 'Products', url: '/'},
                {label: 'Services', url: '/'},
                {label: 'Blog', url: '/'},
                {label: 'Forum', url: ''}
              ]}
            />
          </Header>
          <Content>
            {/* generated srcSet at https://www.responsivebreakpoints.com/ */}
            <Hero
              sizes="(max-width: 1400px) 100vw, 1400px"
              src="/images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1400.jpg"
              srcSet="
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_200.jpg 200w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_350.jpg 350w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_463.jpg 463w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_559.jpg 559w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_650.jpg 650w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_731.jpg 731w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_806.jpg 806w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_878.jpg 878w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_950.jpg 950w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1023.jpg 1023w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1086.jpg 1086w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1145.jpg 1145w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1208.jpg 1208w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1297.jpg 1297w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1348.jpg 1348w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1384.jpg 1384w,
                /images/robert-bye-XLK1tJqvIt4-unsplash_zvtdmb_c_scale,w_1400.jpg 1400w
              "
              alt="Hero image of a crowded New York city."
              text="Welcome To The City!"
            >
              <p>
                Lorem Ipsum is simply sample text of the printing
                and typesetting industry.
              </p>
            </Hero>
            <Columns>
              <Card
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet="
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_200.jpg 200w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_420.jpg 420w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_588.jpg 588w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_733.jpg 733w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_858.jpg 858w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_969.jpg 969w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_1161.jpg 1161w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_1276.jpg 1276w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_1369.jpg 1369w,
                  /images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_1400.jpg 1400w"
                src="/images/dan-ROJFuWCsfmA-unsplash_nnbwkh_c_scale,w_1400.jpg"
                alt="Photo of woman in the city."
                text="Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book."
              />
              <Card
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet="
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_200.jpg 200w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_435.jpg 435w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_593.jpg 593w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_724.jpg 724w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_853.jpg 853w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_975.jpg 975w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1072.jpg 1072w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1173.jpg 1173w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1280.jpg 1280w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1372.jpg 1372w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1397.jpg 1397w,
                  /images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1400.jpg 1400w"
                src="/images/daniel-brubaker-uhYYa9nlr6w-unsplash_x9bibg_c_scale,w_1400.jpg"
                alt="Photo of a city."
                text="It was popularised in the 1960s with the release
                  of Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus
                  PageMaker."
              />
              <Card
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet="
                  /images/adrian-balasoiu-bdGiODpWLBk-unsplash_wz3t8j_c_scale,w_200.jpg 200w,
                  /images/adrian-balasoiu-bdGiODpWLBk-unsplash_wz3t8j_c_scale,w_718.jpg 718w,
                  /images/adrian-balasoiu-bdGiODpWLBk-unsplash_wz3t8j_c_scale,w_1102.jpg 1102w,
                  /images/adrian-balasoiu-bdGiODpWLBk-unsplash_wz3t8j_c_scale,w_1322.jpg 1322w,
                  /images/adrian-balasoiu-bdGiODpWLBk-unsplash_wz3t8j_c_scale,w_1400.jpg 1400w"
                src="/images/adrian-balasoiu-bdGiODpWLBk-unsplash_wz3t8j_c_scale,w_1400.jpg"
                alt="Photo of a man in the city."
                text="Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old."
              />
            </Columns>
          </Content>
          <Footer
            list={[
              {label: 'Terms & Conditions', url: '/'},
              {label: 'Privacy Policy', url: '/'},
              {label: 'About Us', url: '/'},
              {label: 'Contact Us', url: ''}
            ]}
          />
        </Article>
      )
    )
  )
}

// static files
app.use(express.static('public'))

// dynamic SSR
app.get('/', home)

app.listen(port, () => {
  console.log(`Open your browser at http://localhost:${port}`)
})

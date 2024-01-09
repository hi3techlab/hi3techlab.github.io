/* 
 * Sophie Azula, 2/12/23
 * Publications Element to display hci3's publications, split into "Years" sections using divs and paragraphs
 * TODO: reformat using Publication templates, seperate into Years using 'YearsSection' component
*/
import PublicationBanner from "../components/publications/PublicationBanner";
import Footer from "../components/footer/Footer";
import PublicationTemplate from "../components/publications/PublicationTemplate";
import publicationData from '../assets/data/PublicationData.json'

const Publications = () => {

  return (
    <div className="publications" id="entirePubs">
      <PublicationBanner />
      <div className="borderedSection-publications">

      <div className="publication-year-section">
        <p className="publicationHeader">2023</p>
          {/* Mapping JSON file data for "2023" into a Publication Template */}
          {publicationData["2023"] && publicationData["2023"].map(({ title, link }) => (
            <PublicationTemplate title={title} link={link} />
          ))}
        </div>

        <div className="publication-year-section">
        <p className="publicationHeader">2022</p>
          {/* Mapping JSON file data for "2022" into a Publication Template */}
          {publicationData["2022"] && publicationData["2022"].map(({ title, link }) => (
            <PublicationTemplate title={title} link={link} />
          ))}
        </div>

        <div className="publication-year-section">
          <p className="publicationHeader">2021</p>
            {/* Mapping JSON file data for "2021" into a Publication Template */}
            {publicationData["2021"] && publicationData["2021"].map(({ title, link }) => (
              <PublicationTemplate title={title} link={link} />
            ))}
        </div>

        <div className="publication-year-section">
          <p className="publicationHeader">2020</p>
            {/* Mapping JSON file data for "2020" into a Publication Template */}
            {publicationData["2020"] && publicationData["2020"].map(({ title, link }) => (
              <PublicationTemplate title={title} link={link} />
            ))}
        </div>

        <div className="publication-year-section">
          <p className="publicationHeader">2019</p>
            {/* Mapping JSON file data for "2019" into a Publication Template */}
            {publicationData["2019"] && publicationData["2019"].map(({ title, link }) => (
              <PublicationTemplate title={title} link={link} />
            ))}
        </div>

        <div className="publication-year-section">
          <p class="publicationHeader"> Prior to 2019</p>
          <h2>Journal Publications</h2>
          {/* Mapping JSON file data for "Prior to 2019" into a Publication Template */}
          {publicationData["Prev2019"] && publicationData["Prev2019"].map(({ title, link }) => (
            <PublicationTemplate title={title} link={link} />
          ))}

          <h2>Book Chapters</h2>
          {/* Leaving these hard coded (lack of link to map to component) */}
          <p>
          Reychav, I., and Wu, D., “Mobile Technologies Support Effective Learning,” Encyclopedia of Information Science and Technology, Mehdi Khosrow-Pour (ed.), IGI Global, 2014.  <br></br><br></br>
          Bieber, M., Shen, J., Wu, D., and Hiltz, S. R. "Participatory Learning Approach," Encyclopedia of Distance Learning, Caroline Howard, Judith Boettcher, Lorraine Justice, Karen Schenk, Gary Berg, and Patricia Rogers (ed.), Idea Group, 2005.<br></br><br></br>
          Wu, D., Ren, Y., He, L., Johnson, J. "Identifying Unique Patterns in COVID-19 Patient Medical Health Records," Elsevier Publisher, 2022/1.<br></br><br></br>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Publications;

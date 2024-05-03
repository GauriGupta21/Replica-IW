// AdditionalInfo.js
import React from "react";
import "../components/SearchPage.css";

function AdditionalInfo() {
  return (
    <div className="additional-info">
      <h2>About Allahabad (Prayagraj)</h2>
      <div className="image-info">
        <img
          style={{ width: "350px", height: "200px" }}
          src="https://via.placeholder.com/150"
          alt="Prayagraj"
        />
      </div>
      <p>
        Prayagraj, formerly known as Allahabad or Ilahabad, is a metropolis in
        the Indian state of Uttar Pradesh. It is the administrative headquarters
        of the Prayagraj district, the most populous district in the state and
        13th most populous district in India and the Prayagraj division.
      </p>
      <p>
        <b>Wikipedia:</b>
        <a href="https://en.wikipedia.org/wiki/Prayagraj">
          https://en.wikipedia.org/wiki/Prayagraj
        </a>
      </p>
      <p>
        प्रयागराज, जिसका भूतपूर्व नाम इलाहाबाद था, भारत के उत्तर प्रदेश राज्य का
        एक प्रमुख नगर है। यह प्रयागराज ज़िले का मुख्यालय है और हिन्दूओं का एक
        मुख्य तीर्थस्थल है। हिन्दू धर्मग्रन्थों में वर्णित प्रयाग स्थल पवित्रतम
        नदी गंगा और यमुना के संगम पर स्थित है। विकिपीडिया
      </p>
      <p>
        <b>हिन्दी में खोजें :</b>
        <a href="https://hi.wikipedia.org/wiki/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AF%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A4%BE%E0%A4%9C">
          प्रयागराज
        </a>
      </p>

      <p>
        <b>PIN:</b> 211001–211018 <br />
        <b>Neighborhoods:</b> Saraswati Hi Tech City Allahabad, Prayag, MORE{" "}
        <br />
        <b>Earliest mention:</b> c. 1200–1000 BCE <br />
        <b>Elevation:</b> 98 m (321.52 ft) <br />
        <b>Established as a city:</b> 1801 <br />
        <b>Established as Ilahabas:</b> 1584 <br />
        <b>Named for:</b> Panch Prayag
      </p>
      <p className="lines">People also search for:</p>
      <ul>
        <div className="location">
          <div className="image-info">
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://via.placeholder.com/150"
              alt="Prayagraj"
            />
          </div>
          <li>Lucknow</li>
        </div>
        <div className="location">
          <div className="image-info">
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://via.placeholder.com/150"
              alt="Prayagraj"
            />
          </div>
          <li>Delhi</li>
        </div>
        <div className="location">
          <div className="image-info">
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://via.placeholder.com/150"
              alt="Prayagraj"
            />
          </div>
          <li>Raipur</li>
        </div>
        <div className="location">
          <div className="image-info">
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://via.placeholder.com/150"
              alt="Prayagraj"
            />
          </div>
          <li>Haryana</li>
        </div>
      </ul>
      <div className="more"> More About Prayagraj</div>
    </div>
  );
}

export default AdditionalInfo;

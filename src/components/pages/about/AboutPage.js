import React from 'react';
import styled from 'styled-components';
import imagedigital from './images/man-791049_640.jpg';

class AboutPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>קואלה - Kuala</h1>
        <h2>מהפכת קורות החיים המקוונים</h2>
        <Content>
          <Paragraph>
            אנחנו חיים בעולם דיגיטלי, ובעולם שכזה שבו הכל נגיש מכל מקום או
            מכשיר, אין סיבה שגם קורות החיים שלך לא יהיו נגישים מכל מקום!
          </Paragraph>
          <DigitalImage alt='עולם דיגיטלי' src={imagedigital} />
          <Paragraph>
            בעולם דיגיטלי, אשר הופך לירוק יותר, ואשר מעודד הפחתת שימוש בנייר,
            קורות חיים מקוונים הם חלק מהשינוי הזה. מסמכים רבים הופכים לדיגיטליים
            והגיע הזמן שגם מסמך מאוד מרכזי בחיינו, קורות החיים, שהם בעצם כרטיס
            הביקור יעבור להיות מקוון.
          </Paragraph>
          <Paragraph>
            אנחנו מאמינים שבשנים הקרובות יחול שינוי דרמטי בעולם הגיוסים,
            ומעסיקים רבים ישוטטו אחרי הכשרונות הבאים שהם יגייסו ברחבי הרשת.
            המועמדים לגיוס לא יהיו יותר ערימת מסמכים מונוטוניים אשר חוזרים על
            עצמם, מה שיוצר קושי די גדול לבלוט מבין כל השאר.
          </Paragraph>
          <Paragraph>
            גם המעסיקים עצמם יוכלו להפיק תועלת גדולה מן השינוי הזה. החיפוש אחר
            העובד המושלם הופך הרבה יותר קל כאשר קורות החיים הם מקוונים. קל לעבור
            ממועמד אחד לאחר, מבלי צורך להתעסק בערימות מסמכים, לנהל \ להדפיס
            קבצים.
          </Paragraph>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 55px;
  padding-right: 30px;
  padding-left: 30px;
  direction: rtl;
  font-family: ${props => props.theme.fontFamilies.assistant};
  text-align: center;

  & h1 {
    color: rgba(10, 32, 68);
    margin-bottom: -20px;
  }
  h2 {
    color: rgba(10, 32, 68);
    margin-bottom: 10px;
  }
`;

const DigitalImage = styled.img`
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  padding-bottom: 50px;
  display: inline-block;
  text-align: center;
  max-width: 900px;
`;

const Paragraph = styled.p`
  display: inline-block;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.fontSize6};
`;

export default AboutPage;

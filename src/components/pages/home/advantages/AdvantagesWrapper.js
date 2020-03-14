import React from 'react';
import AdvantageItem from './AdvantageItem';
import styled from 'styled-components';

const AdvantagesSection = () => {
  const items = [
    {
      icon: 'eco',
      title: 'אקולוגי',
      content:
        'מייתרים את השימוש בנייר! מרבית השימושים בנייר הופכים אט אט למקוונים, כך גם קורה בקורות החיים אשר הופכים למקוונים.'
    },
    {
      icon: 'wifi',
      title: 'נגיש',
      content:
        'לא צריך לסחוב איתך קבצים, מסמכים, כוננים וגם לא לשלוח לאף אחד במייל. קורות החיים שלך נמצאים ברשת כל הזמן!'
    },
    {
      icon: 'whatshot',
      title: 'מרשים',
      content:
        'לבלוט מבין ערימת מסמכים זו משימה בלתי אפשרית. אבל כשוקות החיים שלך מעוצבים כראוי, הם הופכים בולטים ומנקרי עיניים.'
    }
  ];

  return (
    <AdvantagesWrapper>
      <AdvantageTitle>
        <div>למה קואלה?</div>
      </AdvantageTitle>
      <TitleLine />
      <AdvantangesContainer>
        {items.map(item => {
          return (
            <AdvantageItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </AdvantangesContainer>
    </AdvantagesWrapper>
  );
};

const AdvantangesContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1400px) {
    width: 90%;
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;

const AdvantagesWrapper = styled.section`
  width: 100%;
  margin-top: 60px;
`;

const AdvantageTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.fontSize10};
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;

const TitleLine = styled.div`
  display: block;
  width: 100px;
  height: 0px;
  margin-bottom: 50px;
  border-radius: 3px;
  border-top: 2px solid #9aa2ad;
  border-bottom: 2px solid #9aa2ad;
  margin: 0 auto;
`;

export default AdvantagesSection;

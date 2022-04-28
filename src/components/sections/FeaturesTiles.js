import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'SubTitle',
    paragraph: `Bind AI는 AI 기술 전문성이 필요한 기업과 검증된 연구원을 연결합니다.글로벌 AI 지식를 세상에 공유합니다. AI의 트렌드와 전망을 사회적 가치로 환산합니다. 방향성을 제시하며 동행할 인재를 소개합니다. 저희 연구원들은,
    관련 AI 분야 글로벌 탑티어(top-tier) 학회 논문 1건 이상 보유한
    검증된 인력입니다.
    
    아래 설문을 통해 기업과 딱맞는 연구원을 만나보세요!
    *설문 종료 후 매칭이 성사되면 메일을 통해 연구원의 정보와 결제 정보가 전송됩니다.`
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            

           

           

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <img
                      src={require('../../assets/images/joel.png')}
                      style={{objectFit:'cover',backgroundColor:'white', borderRadius:'100px', width:'100px', height:'100px'}}
           
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    장요엘
                    </h4>
                  <p className="m-0 text-sm">
                    desc
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img
                      src={require('../../assets/images/changho.png')}
                      style={{objectFit:'cover',backgroundColor:'white', borderRadius:'100px', width:'100px', height:'100px'}}
           
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    이창호
                    </h4>
                  <p className="m-0 text-sm">
                    desc
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img
                      src={require('../../assets/images/jaewon.png')}
                      style={{objectFit:'cover',backgroundColor:'white', borderRadius:'100px', width:'100px', height:'100px'}}
           
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    유재원
                    </h4>
                  <p className="m-0 text-sm">
                    desc
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
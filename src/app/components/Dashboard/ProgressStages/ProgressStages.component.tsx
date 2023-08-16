import React from 'react'
import { useAppSelector } from '../../../hooks/redux.hooks'
/*components*/
import SecondStep from '../../../assets/images/ProgressImages/SecondStep.png'
import ThirdStep from '../../../assets/images/ProgressImages/ThirdStep.png'
import FourthStep from '../../../assets/images/ProgressImages/FourthStep.png'
import FifthStep from '../../../assets/images/ProgressImages/FifthStep.png'

import { Confirmation } from '../../../constants/icons.constants'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import _ from 'lodash'
import TopSection from './TopSection'
import ProgressBorder from './ProgressBorder'

function ProgressStages() {
  const { contractInfoData } = useAppSelector((state) => state.contract)
  const pogressStatusData = useAppSelector((state) => state?.finishingMaterials?.pogressStatusData)

  const STEPS = [
    pogressStatusData?.status?.basement
      ? {
          title: 'מרתף',
          imageUrl: FifthStep,
          currentStep: pogressStatusData?.status?.basement
        }
      : null,
    {
      title: 'תחילת ביצוע',
      imageUrl: SecondStep,
      currentStep: pogressStatusData?.status?.permit
    },
    {
      title: 'בניית שלד',
      imageUrl: ThirdStep,
      currentStep: pogressStatusData?.status?.structure
    },
    {
      title: 'עבודות גמר',
      imageUrl: FourthStep,
      currentStep: pogressStatusData?.status?.finishing
    },
    {
      title: 'טופס 4/מסירת דירה',
      imageUrl: FifthStep,
      currentStep: pogressStatusData?.status?.form4
    }
  ].filter((step) => step !== null)

  return (
    <>
      <MainWrapper id='progressStages'>
        <TopSection contractInfoData={contractInfoData} />
        <MainWrapperInner>
          <InnerWrapper>
            {STEPS.map(({ currentStep, ...rest }: any) => ({
              currentStep: currentStep === true ? 100 : currentStep === false ? null : currentStep,
              ...rest
            })).map(({ currentStep, title, imageUrl }, index) => (
              <React.Fragment key={index}>
                <StepProgress className={currentStep > 0 && currentStep < 100 ? 'current-step' : ''}>
                  <ImageBox>
                    <Image
                      className={currentStep === 100 ? 'small' : currentStep > 0 && currentStep < 100 ? 'current' : ''}
                      src={imageUrl}
                      alt={title}
                    />
                  </ImageBox>

                  <ProgressBorder currentStep={currentStep} />

                  <InnerContent className='landscape'>
                    <Dot>
                      {currentStep > 0 && currentStep < 100 && <InnerDot />}
                      {currentStep === 100 && <Confirmation />}
                    </Dot>
                    <MobileWrapper>
                      <Text>{title} </Text>
                      <CurrentStepText>
                        שלב {STEPS.length} - {currentStep}
                        {'% '}
                      </CurrentStepText>
                    </MobileWrapper>
                  </InnerContent>
                </StepProgress>
              </React.Fragment>
            ))}
          </InnerWrapper>
        </MainWrapperInner>
      </MainWrapper>
    </>
  )
}

export default ProgressStages
const MainWrapper = styled('div')({
  padding: '4rem 0 3rem 0',
  margin: '0 2rem',
  borderBottom: `2px solid ${Colors.lightBrownSecond}`,
  [theme.breakpoints.down('md')]: {
    display: 'block',
    margin: '0 10px 3rem 10px',
    padding: '1rem 0 3rem 0'
  },
  [theme.breakpoints.down('lg')]: {
    margin: '0 1rem 3rem 1rem'
  }
})
const MainWrapperInner = styled('div')({
  padding: '3rem 0 0 0',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '0'
  }
})
const InnerWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
})
const StepProgress = styled('div')({
  position: 'relative',
  width: '28%',
  margin: '0 4px',
  '&::nth-child(1)': {
    display: 'none'
  },
  '&:first-child ': {
    '& section': {}
  },
  '&:last-child': {
    '& section': {}
  },
  '&::nth-child(1) .sc-grBbyg kRJNa-D': {
    display: 'none'
  },
  '&.current-step': {
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '100%',
      margin: '0'
    }
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const InnerContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0rem',
  margin: '8px 0 0 0',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    background: 'rgb(234 242 250)',
    padding: '2.5rem 2rem',
    borderRadius: '8px',
    position: 'absolute',
    width: '100%',
    top: '5.5em',
    left: '0',
    right: '0',
    margin: 'auto'
  }
})
const Dot = styled('span')({
  height: '25px',
  width: '25px',
  backgroundColor: Colors.lightBrownSecond,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const InnerDot = styled('span')({
  height: '18px',
  width: '18px',
  backgroundColor: '#FF4C01',
  borderRadius: '50%',
  margin: '2px 1px 1px 1px'
})
const Text = styled('p')({
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: '#49382a',
  padding: '0 1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '0',
    textAlign: 'center'
  }
})
const CurrentStepText = styled('p')({
  display: 'none',
  fontSize: '15px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  padding: '0 1rem',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    fontSize: '15px',
    fontWeight: 'light',
    padding: '0',
    textAlign: 'center'
  }
})
const MobileWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
})
const ImageBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '250px',
  height: '150px',
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    margin: '3rem auto'
  }
})
const Image = styled('img')({
  width: '78px',
  height: '68px',
  margin: 'auto',
  zIndex: '9',
  '&.current': {
    transform: 'scale(2)'
  },
  '&.small': {
    filter: 'grayscale(1)'
  }
})

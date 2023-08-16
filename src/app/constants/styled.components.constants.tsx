import { Padding } from '@mui/icons-material'
import { styled } from '@mui/material'
import { Colors } from './styles.constants'
import { theme } from './theme.constants'

export const TextDimri = styled('span')({
  display: 'block',
  fontSize: '18px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  [theme.breakpoints.down('xl')]: {}
})
export const TextStyleOne = styled('div')({
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.darkBrown
})
export const TextDimriBold = styled('span')({
  display: 'block',
  fontSize: '18px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  [theme.breakpoints.down('xl')]: {}
})
export const ItemInnerWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})
export const IconWrapper = styled('div')({
  cursor: 'pointer'
})
export const MainWrapper = styled('div')({
  listStyle: 'none',
  padding: '10px'
})
export const FooterLink = styled('a')({
  textDecoration: 'none',
  fontSize: 18,
  color: Colors.footerFontText,
  '&:hover': {
    textDecoration: 'underline'
  }
})
export const NavbarLinkText = styled('p')({
  fontSize: '24px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.47',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  padding: '0 5px'
})
export const ItemDate = styled('span')({
  display: 'block',
  fontSize: '18px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  [theme.breakpoints.down('xl')]: {
    fontSize: '14px'
  }
})
export const Title = styled('div')({
  fontSize: '20px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  padding: '0 0.5rem',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px'
  }
})
export const CodeStepWrapper = styled('div')({
  width: '100%',
  margin: 'auto'
})
export const CodeStepText = styled('h5')({
  display: 'block',
  fontSize: '18px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: Colors.black,
  padding: '1rem 0'
})
export const ButtonWrapper = styled('div')({
  padding: '2rem 0',
  '.MuiButtonBase-root.MuiButton-textPrimary': {
    fontSize: '30px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Colors.black,
    '&:hover': {
      backgroundColor: Colors.secondary,
      boxShadow:
        '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
    }
  }
})
export const FormSmsFirstStep = styled('form')({
  width: '80%',
  margin: 'auto'
})
export const FloatingLabelWrapper = styled('div')({
  position: 'relative',
  padding: '9px 0'
})
export const Input = styled('input')({
  fontSize: '18px',
  padding: '10px',
  display: 'block',
  width: '100%',
  height: '50px',
  backgroundColor: 'transparent',
  border: '1px solid #757575',
  borderRadius: '4px',
  '&:focus': {
    outline: 'none'
  },
  '&.error': {
    borderColor: 'red'
  },
  '&:focus ~ label': {
    top: '-6px',
    fontSize: '14px',
    color: '#5264ae',
    background: '#f4f3f0',
    zIndex: '9999',
    width: '80px',
    textAlign: 'right',
    padding: '0 8px'
  },
  '&:not(:placeholder-shown) ~ label': {
    top: '-8px',
    fontSize: '14px',
    color: '#5264ae',
    background: '#f4f3f0',
    zIndex: '9999',
    width: '80px',
    textAlign: 'right',
    padding: '0 8px'
  },
  '&:focus ~ label.error': {
    color: 'red'
  },
  '&:not(:placeholder-shown) ~ label.error': {
    color: 'red'
  }
})
export const FloatingLabel = styled('label')({
  color: '#999',
  fontSize: '18px',
  lineHeight: '33px',
  fontWeight: 'normal',
  position: 'absolute',
  pointerEvents: 'none',
  right: '5px',
  top: '10px',
  padding: '5px 10px 0 10px',
  transition: '0.2s ease all'
})
export const ErrorMsg = styled('span')({
  color: 'red',
  textAlign: 'right',
  display: 'block',
  padding: '0 1rem'
})
export const SubTitle = styled('h3')({
  fontSize: '45px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.black,
  marginBlockStart: 0,
  marginBlockEnd: 0,
  [theme.breakpoints.down('xl')]: {
    fontSize: '35px'
  }
})
export const FormEnterWrapperInner = styled('div')({})
export const CheckBoxWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
})
export const CheckBoxInput = styled('input')({
  position: 'relative',
  width: '18px',
  height: '18px'
})
export const CheckBoxText = styled('span')({
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.lightBlack,
  padding: '0 0.5rem'
})
export const PasswordWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 0 1rem 0',
  width: '70%',
  margin: 'auto'
})
export const LoginTitle = styled('h3')({
  fontSize: '30px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.black,
  marginBlockStart: 0,
  marginBlockEnd: 0
})
export const StaticText = styled('p')({
  fontSize: '18px',
  fontWeight: '300',
  fontStretch: 'normal',
  lineHeight: 1,
  letterSpacing: 'normal',
  color: Colors.primary,
  padding: ' 5px 0',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px'
  },
  '&.extra': {
    padding: '5px 0 5px 5px'
  }
})
export const ResultPayments = styled('b')({
  fontSize: '20px',
  fontWeight: '600',
  fontStretch: 'normal',
  lineHeight: 1,
  letterSpacing: 'normal',
  color: Colors.black,
  padding: 0,
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px'
  }
})
// new styles const
export const MainPageTitle = styled('h2')({
  fontSize: '43px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.darkBrown
})
export const SectionTitle = styled('h2')({
  fontSize: '43px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.darkBrown,

  [theme.breakpoints.down('md')]: {
    fontSize: '28px'
  },
  '&.removeme': {
    color: Colors.white
  }
})
export const WrapperList = styled('div')({
  height: '240px',
  overflowY: 'auto',
  direction: 'ltr',
  padding: '0 10px 0 0',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    overflowY: 'unset',
    padding: '0'
  }
})
export const ItemText = styled('p')({
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.darkBrown,
  '&.name': {
    fontWeight: '600'
  },
  '&.pad-12': {
    padding: '12px 0 0 0'
  },
  '&.appeal-num': {
    color: Colors.lightBrown
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'right'
  }
})
export const DimanicText = styled('p')({
  fontSize: '22px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.darkBrown,
  '&.padd-2': {
    padding: '0 1rem 0.5rem 1rem',
    minWidth: '155px',
    [theme.breakpoints.down('md')]: {
      padding: '0rem 2rem 0 2rem'
    }
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    textAlign: 'right'
  }
})
export const FlexWrapperTop = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& button.MuiButtonBase-root.MuiButton-root': {
    padding: '3px 12px',
    borderRadius: '20px',
    backgroundColor: '#e2eef8',
    color: Colors.lightBlueButton,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
    margin: '0 1rem 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '0'
    },
    '&::hover': {
      color: 'black'
    }
  },
  '& a': {
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Colors.lightBlueButton,
    textDecoration: 'none',
    padding: '4px 0'
  },
  [theme.breakpoints.down('md')]: {
    '&.mobile-view': {
      display: 'none'
    }
  }
})
export const Plus = styled('div')({
  margin: '0 0 0 06px',
  color: '#fff',
  backgroundColor: '#4295e5',
  fontSize: '20px',
  lineHeight: '11px',
  padding: '4px',
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  transition: 'transform 0.2s ease-in'
})
export const ButtonText = styled('p')({
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.lightBlueButton,
  padding: '4px 0'
})

export const AccordionWrapper = styled('div')({
  '& #panel1d-header, #panel2d-header': {
    minHeight: '74px',
    alignItems: 'flex-start',
    direction: 'rtl',
    [theme.breakpoints.down('md')]: {
      direction: 'ltr'
    }
  },
  '#appeal-panel1d-header': {
    flexDirection: 'inherit'
  },
  '& .MuiPaper-elevation': {
    border: 'none',
    margin: '3px 0'
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    margin: '3px 0 0 0',
    transform: 'rotate(180deg)'
  },
  '& .MuiButtonBase-root': {
    background: Colors.softBrown,
    margin: '3px 0 0 0',
    padding: '16px',
    borderRadius: '8px 8px 0 0',
    [theme.breakpoints.down('md')]: {
      padding: '16px 4px'
    }
  },
  '& .MuiAccordionSummary-expandIconWrapper.MuiButtonBase-root': {
    background: Colors.softBrown,
    margin: '3px 0 0 0',
    padding: '16px',
    borderRadius: '8px 8px 0 0',
    [theme.breakpoints.down('md')]: {
      padding: '16px 4px'
    }
  },
  '& .MuiPaper-root.MuiPaper-elevation': {
    border: 'none'
  },
  '& .MuiAccordionSummary-content': {
    margin: '0 1rem 0 0'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    borderRadius: '3px'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded svg': {
    borderRadius: '3px',
    backgroundColor: Colors.white
  },
  '& .suppliersData': {
    padding: '0 !important',
    borderTop: '0 !important'
  },
  '& .MuiAccordion-region .MuiAccordionDetails-root': {
    borderTop: 'none !important'
  },
  '& .MuiCollapse-entered': {
    bordertop: 'none !important'
  },
  '& #panel1d-content': {
    padding: '0 !important',
    '& .MuiAccordionDetails-root': {
      padding: '0 !important'
    }
  },
  '& #simple-tabpanel-1 .MuiBox-root': {
    padding: 0
  }
})
export const AccordionWrapperContent = styled('div')({
  width: '100%',
  background: Colors.softBlue,
  padding: '1rem',
  margin: '5px 0'
})
export const CardInfoInnerWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0px 10px 16px'
})
export const CardInnerFlex = styled('div')({
  display: 'block',
  width: '100%'
})

export const PaymentsText = styled('p')({
  fontSize: '22px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.lightBrown,

  [theme.breakpoints.down('lg')]: {
    fontSize: '24px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px'
  }
})
export const PaymentsTextNumber = styled('p')({
  fontSize: '30px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.black,
  '&.orange-color': {
    color: Colors.oragne
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '22px',
    fontWeight: '26px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    fontWeight: '23px'
  }
})
export const UserText = styled('p')({
  fontSize: '36px',
  fontWeight: '400',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.47',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.darkBrown,
  padding: '0',
  '&.logout-hover': {
    textAlign: 'center'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
    padding: '0'
  },
  '&.username': {
    fontSize: '14px',
    lineHeight: '14px'
  }
})

export const AccordionaLignItems = styled('div')({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {}
})

export const CircleSpan = styled('div')({
  margin: '0 21px 0 0',
  background: Colors.blue,
  color: Colors.white,
  padding: '0 11px',
  borderRadius: '50%',
  '&.payment-moblie-view': {
    width: '130px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 21px 0 0',
    background: Colors.softBrown,
    color: Colors.black,
    padding: '4px 11px',
    borderRadius: '20px 20px 20px 20px',
    '& .progressbar-mobile-view': {
      display: 'none'
    },
    '& li ': {
      padding: '0'
    },
    '& li div': {
      width: '66.6%'
    },
    '& .CircularProgressbar .CircularProgressbar-trail': {
      strokeWidth: '12px'
    },
    '& .CircularProgressbar .CircularProgressbar-path': {
      strokeWidth: '12px'
    }
  },
  [theme.breakpoints.down('md')]: {}
})

export const SmallText = styled('p')({
  fontSize: '15px',
  fontWeight: '400',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right'
})

export const ItemList = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  minHeight: '100px',
  padding: '16px 12px 18px 24px',
  border: `1px solid ${Colors.lightBrownSecond}`,
  direction: 'rtl',
  cursor: 'pointer',
  '&.firstMsg': {
    background: Colors.lightBrownSecond,
    '& .pad-12': {
      color: Colors.orengeText
    }
  },
  '&:hover': {
    background: Colors.lightBlueTwo
  }
})

export const ListMassage = styled('ul')({
  listStyle: 'none',
  padding: '0 10px 0 0px',
  height: '665px',
  overflowY: 'auto',
  direction: 'ltr',
  '&.msg-scroll::-webkit-scrollbar-track ': {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  },
  '&.msg-scroll::-webkit-scrollbar': {
    width: '9px',
    backgroundColor: '#f5f5f5',
    margin: '0 8px'
  },
  '&.msg-scroll::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    backgroundColor: Colors.primaryBrowncolor
  },
  '&.remove .firstMsg.remove-bg': {
    backgroundColor: Colors.white,
    '& .pad-12': {
      color: Colors.black
    }
  },
  [theme.breakpoints.down('xl')]: {
    height: '535px'
  },
  [theme.breakpoints.down('md')]: {
    height: '400px'
  }
})
export const AccordionWrapperInner = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: '0 1rem',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})
export const InnerItem = styled('div')({
  display: 'flex',
  width: '50%',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
})

export const InnerContent = styled('div')({
  backgroundColor: Colors.softBlue,
  padding: '1rem',
  minHeight: '67px',
  margin: '3px 0',
  direction: 'rtl'
})
export const DateWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})
export const TitleFlexWrap = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-end',
    margin: '10px 0'
  }
})
export const ResponseTitle = styled('p')({
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  background: Colors.lightBlueBG,
  color: Colors.blue,
  padding: '5px 16px',
  borderRadius: '20px'
})
export const PostTitle = styled('h3')({
  fontSize: '26px',
  fontWeight: '600',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.black,
  margin: '0',
  [theme.breakpoints.down('md')]: {
    color: Colors.black
  }
})
export const PostText = styled('p')({
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: '28px',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  [theme.breakpoints.down('md')]: {
    color: Colors.black,
    direction: 'rtl',
    padding: '0 0 10px 0'
  }
})
export const Arrow = styled('div')({
  fontSize: '33px',
  padding: '0 8px',
  fontWeight: '200',
  [theme.breakpoints.down('md')]: {}
})
export const Text = styled('p')({
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: '#49382a',
  background: Colors.lightBrownSecond,
  borderRadius: '20px',
  padding: '0 6px',
  [theme.breakpoints.down('md')]: {
    background: 'none',
    padding: 0
  }
})
export const SubMenu = styled('div')({
  position: 'absolute',
  backgroundColor: '#fff',
  width: '220px',
  height: '200px',
  top: '45px',
  left: '0',
  borderRadius: '8px',
  padding: '10px 0',
  boxShadow: '0 4px 24px -4px rgba(71, 59, 51, 0.18)',
  border: 'solid 1px #eeece7',
  display: 'none'
})
export const EmailTitle = styled('p')({
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.47',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#49382a;'
})
export const FlexBetweenWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 10px 0 10px'
})
export const FlexStartWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '8px 10px'
})

export const LightTitle = styled('h2')({
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '35px',
  lineHeight: '51px',
  textAlign: 'center',
  '&.profile': {
    textAlign: 'right',
    padding: '5px 0 1rem 0'
  }
})

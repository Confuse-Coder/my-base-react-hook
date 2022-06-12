import { useRef, useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDownAnimation from './CountDownAnimation';

const InputOTP = (props) => {
  const chilRef = useRef();
  const [otp, setOtp] = useState('');

  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp);
  };

  const handleConfirmOTP = () => {
    props.handleSubmitOTP();
  };

  const handleClearBtn = () => {
    chilRef.current.resetTimer();
    console.log('check ref', chilRef);
  };

  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={'input-customize'}
      />
      <div className="timer">
        {/* <CountDown setIsDisableBtn={props.setIsDisableBtn} /> */}
        <CountDownAnimation setIsDisableBtn={props.setIsDisableBtn} ref={chilRef} />
      </div>
      <div className="action">
        <button className="clear" disabled={!props.isDisableBtn} onClick={() => handleClearBtn()}>
          Clear
        </button>
        <button
          className="confirm"
          onClick={() => handleConfirmOTP()}
          disabled={props.isDisableBtn}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;

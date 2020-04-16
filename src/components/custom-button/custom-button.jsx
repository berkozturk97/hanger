import React from 'react';

// import './custom-button.scss';

import { CustomButtonContainer } from './custom-button.style';


// css in JS version
const CustomButton = ({children, ...props}) => (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )

export default CustomButton;



// normal css version

// const CustomButton = ({
//     children,
//     inverted,
//     isGoogleSignIn,
//     ...otherProps }) => (
//         <button className={`${inverted ? 'inverted' : ''}
//         ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//             {children}
//         </button>
//     )

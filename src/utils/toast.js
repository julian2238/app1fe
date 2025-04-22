import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export const showSuccessToast = (title, message) => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
    position: 'top',
  });
};
  
export const showErrorToast = (title, message) => {
  Toast.show({
      type: 'error',
      text1: title,
      text2: message,
      position: 'top',
      
  });
};
  
export const showInfoToast = (title, message) => {
  Toast.show({
      type: 'info',
      text1: title,
      text2: message,
      position: 'top',
  });
};

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', height: 80 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 14
      }}
      text2NumberOfLines={2}
    />
  ),
};